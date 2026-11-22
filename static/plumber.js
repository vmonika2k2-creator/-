(() => {
  const cart = new Map();
  let pendingBooking = { name: 'Plumber consultation', price: 0 };
  let toastTimer;
  const money = amount => `₹${Number(amount).toLocaleString('en-IN')}`;
  const cards = () => [...document.querySelectorAll('[data-service-card]')];

  document.getElementById('serviceSearch').addEventListener('input', event => {
    const query = event.target.value.trim().toLowerCase();
    let count = 0;
    for (const card of cards()) {
      const matches = card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) count++;
    }
    document.querySelectorAll('.service-category').forEach(section => {
      section.hidden = !section.querySelector('[data-service-card]:not([hidden])');
    });
    document.getElementById('serviceTotal').textContent = `${count} ${count === 1 ? 'service' : 'services'}`;
    document.getElementById('noResults').hidden = count !== 0;
  });

  document.addEventListener('click', event => {
    const addButton = event.target.closest('[data-add-service]');
    if (addButton) {
      const name = addButton.dataset.name;
      cart.set(name, (cart.get(name) || 0) + 1);
      updateCart();
      addButton.classList.add('is-added');
      addButton.innerHTML = 'ADDED <span aria-hidden="true">✓</span>';
      showToast(`${name} added to your cart`);
    }
    const photoButton = event.target.closest('[data-photo]');
    if (photoButton) {
      const image = document.getElementById('largePhoto');
      image.src = photoButton.dataset.photo;
      image.alt = photoButton.dataset.caption;
      document.getElementById('photoCaption').textContent = photoButton.dataset.caption;
      document.getElementById('photoModal').hidden = false;
    }
    const bookingButton = event.target.closest('[data-open-booking]');
    if (bookingButton) openBooking(bookingButton.dataset.service, 0);
    if (event.target.closest('[data-open-bookings]')) openBookings();
    if (event.target.closest('[data-open-cart]')) openCart();
    if (event.target.closest('[data-close-modal]')) closeDialogs();
    if (event.target.closest('[data-close-cart]') || event.target.id === 'cartBackdrop') closeCart();
    if (event.target.closest('[data-checkout]')) checkout();
    const removeButton = event.target.closest('[data-remove]');
    if (removeButton) {
      cart.delete(removeButton.dataset.remove);
      updateCart();
      document.querySelectorAll('[data-add-service]').forEach(button => {
        if (button.dataset.name === removeButton.dataset.remove) {
          button.classList.remove('is-added');
          button.innerHTML = 'ADD <span aria-hidden="true">+</span>';
        }
      });
    }
  });

  function updateCart() {
    const count = [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
    document.getElementById('cartCount').textContent = count;
    const container = document.getElementById('cartItems');
    if (!count) {
      container.innerHTML = '<p class="cart-empty">Your cart is empty. Add a service to get started.</p>';
    } else {
      container.innerHTML = [...cart.entries()].map(([name, quantity]) => {
        const button = [...document.querySelectorAll('[data-add-service]')].find(item => item.dataset.name === name);
        const price = Number(button?.dataset.price || 0);
        return `<article class="cart-line"><div><strong>${escapeHtml(name)}</strong><span>${quantity} × ${money(price)}</span></div><strong>${money(quantity * price)}</strong><button type="button" data-remove="${escapeHtml(name)}" aria-label="Remove ${escapeHtml(name)}">×</button></article>`;
      }).join('');
    }
    const total = [...cart.entries()].reduce((sum, [name, quantity]) => {
      const button = [...document.querySelectorAll('[data-add-service]')].find(item => item.dataset.name === name);
      return sum + quantity * Number(button?.dataset.price || 0);
    }, 0);
    document.getElementById('cartTotal').textContent = money(total);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }
  function openCart() { document.getElementById('cartBackdrop').hidden = false; }
  function closeCart() { document.getElementById('cartBackdrop').hidden = true; }
  function checkout() {
    if (!cart.size) { showToast('Add a service before booking'); return; }
    pendingBooking = {
      name: [...cart.keys()].join(', '),
      price: Number(document.getElementById('cartTotal').textContent.replace(/[^0-9]/g, '')),
    };
    closeCart();
    openBooking(pendingBooking.name, pendingBooking.price);
  }
  function openBooking(name, price) {
    pendingBooking = { name, price };
    document.getElementById('bookingSummary').textContent = name + (price ? ` · Estimated total ${money(price)}` : '');
    document.getElementById('bookingError').textContent = '';
    document.getElementById('bookingModal').hidden = false;
  }
  function closeDialogs() {
    ['bookingModal', 'photoModal', 'bookingsModal'].forEach(id => { document.getElementById(id).hidden = true; });
  }
  async function openBookings() {
    const modal = document.getElementById('bookingsModal');
    const list = document.getElementById('bookingsList');
    modal.hidden = false;
    list.innerHTML = '<p>Loading bookings…</p>';
    try {
      const response = await fetch('/bookings');
      if (!response.ok) throw new Error('Could not load bookings. Please try again.');
      const bookings = await response.json();
      document.getElementById('bookingCount').textContent = bookings.length;
      list.innerHTML = bookings.length ? bookings.slice().reverse().map(booking => `
        <article class="booking-entry"><strong>${escapeHtml(booking.service || 'Home service')}</strong>
          <span>${escapeHtml(booking.date || 'Date to be confirmed')} · ${escapeHtml(booking.city || 'Pune')}</span>
          <small>Booked for ${escapeHtml(booking.name || 'Customer')}</small>
        </article>`).join('') : '<p class="cart-empty">No bookings yet. Choose a plumbing service to get started.</p>';
    } catch (error) { list.innerHTML = `<p class="form-error">${escapeHtml(error.message)}</p>`; }
  }
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
  }

  document.getElementById('bookingForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    document.getElementById('bookingError').textContent = '';
    try {
      const response = await fetch('/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: pendingBooking.name,
          name: fields.get('name'),
          phone: fields.get('phone'),
          date: fields.get('date'),
          city: document.querySelector('.location-button').textContent.trim().replace('⌄', '').trim(),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Could not confirm your booking.');
      document.getElementById('bookingCount').textContent = result.total;
      cart.clear(); updateCart();
      document.querySelectorAll('[data-add-service]').forEach(button => {
        button.classList.remove('is-added');
        button.innerHTML = 'ADD <span aria-hidden="true">+</span>';
      });
      form.reset(); closeDialogs(); showToast('Your booking request has been submitted');
    } catch (error) { document.getElementById('bookingError').textContent = error.message; }
    finally { submit.disabled = false; }
  });

  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault(); document.getElementById('serviceSearch').focus();
    }
    if (event.key === 'Escape') { closeDialogs(); closeCart(); }
  });

  const sections = [...document.querySelectorAll('.service-category')];
  if ('IntersectionObserver' in window) {
    const activeCategory = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        document.querySelectorAll('[data-side-link]').forEach(link => {
          link.classList.toggle('active', link.dataset.sideLink === entry.target.id);
        });
      }
    }, { rootMargin: '-18% 0px -72% 0px' });
    sections.forEach(section => activeCategory.observe(section));
  }
})();
