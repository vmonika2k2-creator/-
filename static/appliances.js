(() => {
  const cart = new Map();
  let pending = { service: 'Appliance service consultation', total: 0 };
  let toastTimer;
  let detailsTarget = null;
  const services = () => [...document.querySelectorAll('[data-service]')];
  const money = value => `â‚¹${Number(value).toLocaleString('en-IN')}`;
  const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  document.getElementById('search').addEventListener('input', event => {
    const query = event.target.value.trim().toLowerCase();
    let count = 0;
    for (const card of services()) {
      const matched = card.dataset.search.includes(query);
      card.hidden = !matched;
      if (matched) count++;
    }
    document.querySelectorAll('[data-category]').forEach(section => {
      section.hidden = !section.querySelector('[data-service]:not([hidden])');
    });
    document.getElementById('resultCount').textContent = `${count} ${count === 1 ? 'service' : 'services'}`;
    document.getElementById('emptyState').hidden = count > 0;
  });

  document.addEventListener('click', event => {
    const add = event.target.closest('[data-add]');
    if (add) addToCart(add.dataset.name, Number(add.dataset.price));
    const details = event.target.closest('[data-details]');
    if (details) {
      detailsTarget = [...document.querySelectorAll('[data-add]')].find(button => button.dataset.name === details.dataset.details);
      document.getElementById('detailsTitle').textContent = details.dataset.details;
      document.getElementById('detailsDescription').textContent = details.dataset.description;
      document.getElementById('detailsModal').hidden = false;
    }
    if (event.target.closest('#detailsAdd') && detailsTarget) {
      addToCart(detailsTarget.dataset.name, Number(detailsTarget.dataset.price));
      document.getElementById('detailsModal').hidden = true;
    }
    const photo = event.target.closest('[data-photo]');
    if (photo) {
      const image = document.getElementById('largePhoto');
      image.src = photo.dataset.photo;
      image.alt = photo.dataset.caption;
      document.getElementById('photoCaption').textContent = photo.dataset.caption;
      document.getElementById('photoModal').hidden = false;
    }
    const booking = event.target.closest('[data-booking]');
    if (booking) openBooking(booking.dataset.booking, 0);
    if (event.target.closest('[data-bookings]')) openBookings();
    if (event.target.closest('[data-cart]')) document.getElementById('cartBackdrop').hidden = false;
    if (event.target.closest('[data-close]')) closeModals();
    if (event.target.closest('[data-close-cart]') || event.target.id === 'cartBackdrop') document.getElementById('cartBackdrop').hidden = true;
    if (event.target.closest('#checkout')) checkout();
    const remove = event.target.closest('[data-remove]');
    if (remove) { cart.delete(remove.dataset.remove); syncCart(); }
  });

  function addToCart(name, price) {
    const entry = cart.get(name) || { price, quantity: 0 };
    entry.quantity++;
    cart.set(name, entry);
    syncCart();
    document.querySelectorAll('[data-add]').forEach(button => {
      if (button.dataset.name === name) button.classList.add('added');
    });
    showToast(`${name} added to your cart`);
  }

  function syncCart() {
    const count = [...cart.values()].reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
    const container = document.getElementById('cartItems');
    container.innerHTML = count ? [...cart.entries()].map(([name, item]) => `
      <article class="cart-line"><div><strong>${escapeHtml(name)}</strong><span>${item.quantity} Ã— ${money(item.price)}</span></div><strong>${money(item.quantity * item.price)}</strong><button type="button" data-remove="${escapeHtml(name)}" aria-label="Remove ${escapeHtml(name)}">Ã—</button></article>`).join('') : '<p>Your cart is empty. Add a service to get started.</p>';
    const total = [...cart.values()].reduce((sum, item) => sum + item.quantity * item.price, 0);
    document.getElementById('cartTotal').textContent = money(total);
    document.querySelectorAll('[data-add]').forEach(button => {
      button.classList.toggle('added', cart.has(button.dataset.name));
    });
  }

  function checkout() {
    if (!cart.size) { showToast('Add an appliance service before booking'); return; }
    pending = { service: [...cart.keys()].join(', '), total: [...cart.values()].reduce((s, x) => s + x.quantity * x.price, 0) };
    document.getElementById('cartBackdrop').hidden = true;
    openBooking(pending.service, pending.total);
  }
  function openBooking(service, total) {
    pending = { service, total };
    document.getElementById('bookingSummary').textContent = `${service}${total ? ` Â· Estimated total ${money(total)}` : ''}`;
    document.getElementById('bookingError').textContent = '';
    document.getElementById('bookingModal').hidden = false;
  }
  function closeModals() {
    ['bookingModal', 'detailsModal', 'photoModal', 'bookingsModal'].forEach(id => { document.getElementById(id).hidden = true; });
  }
  async function openBookings() {
    const modal = document.getElementById('bookingsModal');
    const list = document.getElementById('bookingsList');
    modal.hidden = false;
    list.textContent = 'Loading bookingsâ€¦';
    try {
      const response = await fetch('/bookings');
      if (!response.ok) throw new Error('Could not load bookings.');
      const bookings = await response.json();
      document.getElementById('bookingCount').textContent = bookings.length;
      list.innerHTML = bookings.length ? bookings.slice().reverse().map(item => `<article class="booking-row"><b>${escapeHtml(item.service || 'Home service')}</b><small>${escapeHtml(item.date || 'Date to be confirmed')} Â· ${escapeHtml(item.city || 'Bangalore')}</small></article>`).join('') : '<p>No bookings yet.</p>';
    } catch (error) { list.textContent = error.message; }
  }
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  document.getElementById('bookingForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    document.getElementById('bookingError').textContent = '';
    try {
      const response = await fetch('/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: pending.service, name: data.get('name'), phone: data.get('phone'), date: data.get('date'), city: 'Bangalore' }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Could not confirm booking.');
      document.getElementById('bookingCount').textContent = result.total;
      cart.clear(); syncCart(); form.reset(); closeModals(); showToast('Your appliance service booking has been submitted');
    } catch (error) { document.getElementById('bookingError').textContent = error.message; }
    finally { submit.disabled = false; }
  });
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); document.getElementById('search').focus(); }
    if (event.key === 'Escape') { closeModals(); document.getElementById('cartBackdrop').hidden = true; }
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) document.querySelectorAll('[data-side]').forEach(link => link.classList.toggle('active', link.dataset.side === entry.target.id));
    }), { rootMargin: '-18% 0px -72% 0px' });
    document.querySelectorAll('[data-category]').forEach(section => observer.observe(section));
  }
})();

