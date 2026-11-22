(() => {
  const cart = new Map();
  const photoRoot = '/assets/electrican/photos/';
  const searchInput = document.getElementById('serviceSearch');
  const groups = [...document.querySelectorAll('.service-group')];
  const cartOverlay = document.getElementById('cartOverlay');
  const bookingOverlay = document.getElementById('bookingOverlay');
  const photoOverlay = document.getElementById('photoOverlay');
  const customerDate = document.getElementById('customerDate');
  let bookingServiceOverride = '';

  const today = new Date();
  customerDate.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  function rupees(value) {
    return `₹${Number(value).toLocaleString('en-IN')}`;
  }

  function syncCart() {
    const quantity = [...cart.values()].reduce((total, item) => total + item.quantity, 0);
    const total = [...cart.values()].reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cartCount').textContent = String(quantity);
    document.getElementById('cartBarCount').textContent = `${quantity} ${quantity === 1 ? 'service' : 'services'}`;
    document.getElementById('cartBarTotal').textContent = rupees(total);
    document.getElementById('cartSummaryTotal').textContent = rupees(total);
    document.getElementById('cartBar').hidden = quantity === 0;
    document.getElementById('cartEmpty').hidden = quantity > 0;
    document.getElementById('cartSummary').hidden = quantity === 0;

    document.querySelectorAll('[data-add-service]').forEach(button => {
      const item = cart.get(button.dataset.name);
      button.classList.toggle('added', Boolean(item));
      button.innerHTML = item ? `ADDED <span>${item.quantity}</span>` : 'ADD <span aria-hidden="true">+</span>';
      button.setAttribute('aria-label', item ? `${item.name} added, quantity ${item.quantity}. Add another` : `Add ${button.dataset.name} to cart`);
    });

    const cartItems = document.getElementById('cartItems');
    cartItems.replaceChildren();
    for (const item of cart.values()) {
      const row = document.createElement('div');
      row.className = 'cart-row';
      const label = document.createElement('div');
      const name = document.createElement('strong');
      name.textContent = item.name;
      const unit = document.createElement('small');
      unit.textContent = `${rupees(item.price)} each`;
      label.append(name, unit);
      const quantityControl = document.createElement('div');
      quantityControl.className = 'quantity-control';
      const minus = document.createElement('button');
      minus.type = 'button'; minus.textContent = '−'; minus.setAttribute('aria-label', `Remove one ${item.name}`);
      minus.addEventListener('click', () => changeQuantity(item.name, -1));
      const number = document.createElement('span'); number.textContent = String(item.quantity);
      const plus = document.createElement('button');
      plus.type = 'button'; plus.textContent = '+'; plus.setAttribute('aria-label', `Add one ${item.name}`);
      plus.addEventListener('click', () => changeQuantity(item.name, 1));
      quantityControl.append(minus, number, plus);
      const subtotal = document.createElement('span');
      subtotal.className = 'cart-row-price'; subtotal.textContent = rupees(item.price * item.quantity);
      row.append(label, quantityControl, subtotal);
      cartItems.append(row);
    }
  }

  function addToCart(name, price) {
    const existing = cart.get(name);
    if (existing) existing.quantity += 1;
    else cart.set(name, {name, price: Number(price), quantity: 1});
    syncCart();
  }

  function changeQuantity(name, delta) {
    const item = cart.get(name);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) cart.delete(name);
    syncCart();
  }

  function openOverlay(overlay) {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('locked');
  }

  function closeOverlay(overlay) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    if (![cartOverlay, bookingOverlay, photoOverlay].some(node => node.classList.contains('open'))) {
      document.body.classList.remove('locked');
    }
  }

  function openBooking(serviceOverride = '') {
    bookingServiceOverride = serviceOverride;
    document.getElementById('bookingStatus').textContent = '';
    const title = serviceOverride ? 'Ask about VIP membership' : 'Schedule an electrician';
    document.getElementById('bookingTitle').textContent = title;
    closeOverlay(cartOverlay);
    openOverlay(bookingOverlay);
    window.setTimeout(() => document.getElementById('customerName').focus(), 70);
  }

  document.querySelectorAll('[data-add-service]').forEach(button => {
    button.addEventListener('click', () => addToCart(button.dataset.name, button.dataset.price));
  });
  document.querySelectorAll('[data-open-cart]').forEach(button => {
    button.addEventListener('click', () => openOverlay(cartOverlay));
  });
  document.querySelectorAll('[data-close-cart]').forEach(button => button.addEventListener('click', () => closeOverlay(cartOverlay)));
  document.querySelectorAll('[data-open-booking]').forEach(button => button.addEventListener('click', () => openBooking()));
  document.querySelector('[data-add-membership]').addEventListener('click', () => openBooking('VIP Membership enquiry for electrical services'));
  document.querySelector('[data-close-booking]').addEventListener('click', () => closeOverlay(bookingOverlay));

  [cartOverlay, bookingOverlay].forEach(overlay => {
    overlay.addEventListener('click', event => { if (event.target === overlay) closeOverlay(overlay); });
  });

  document.querySelectorAll('.details-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const panel = button.nextElementSibling;
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.innerHTML = expanded ? 'View details <span>›</span>' : 'Hide details <span>⌄</span>';
      panel.hidden = expanded;
    });
  });

  function filterServices(query) {
    const term = query.trim().toLowerCase();
    let visibleItems = 0;
    groups.forEach(group => {
      let itemsInGroup = 0;
      group.querySelectorAll('.electric-service').forEach(item => {
        const visible = !term || item.dataset.serviceName.includes(term) || item.textContent.toLowerCase().includes(term);
        item.hidden = !visible;
        if (visible) itemsInGroup += 1;
      });
      group.classList.toggle('filtered-out', itemsInGroup === 0);
      visibleItems += itemsInGroup;
    });
    document.getElementById('noResults').hidden = visibleItems > 0;
    document.getElementById('resultCount').textContent = term ? `${visibleItems} matching services` : `${visibleItems} services`;
  }
  searchInput.addEventListener('input', () => filterServices(searchInput.value));
  filterServices('');

  document.querySelectorAll('.quick-category[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      searchInput.value = '';
      filterServices('');
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
      history.replaceState(null, '', link.getAttribute('href'));
    });
  });

  const quickCategories = document.getElementById('quickCategories');
  const showAll = document.getElementById('showAllCategories');
  showAll.addEventListener('click', () => {
    const expanded = showAll.getAttribute('aria-expanded') === 'true';
    showAll.setAttribute('aria-expanded', String(!expanded));
    quickCategories.classList.toggle('expanded', !expanded);
    showAll.querySelector('span:last-child').textContent = expanded ? 'Show More' : 'Show Less';
    showAll.querySelector('.more-icon').textContent = expanded ? '⌄' : '⌃';
  });

  document.querySelectorAll('[data-photo]').forEach(button => {
    button.addEventListener('click', () => {
      const photo = document.getElementById('largePhoto');
      photo.src = photoRoot + encodeURIComponent(button.dataset.photo);
      photo.alt = button.dataset.caption || 'Electrician service photo';
      document.getElementById('photoCaption').textContent = button.dataset.caption || '';
      openOverlay(photoOverlay);
    });
  });
  document.querySelector('[data-close-photo]').addEventListener('click', () => closeOverlay(photoOverlay));
  photoOverlay.addEventListener('click', event => { if (event.target === photoOverlay) closeOverlay(photoOverlay); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      [cartOverlay, bookingOverlay, photoOverlay].forEach(closeOverlay);
    }
  });

  document.getElementById('bookingForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const items = [...cart.values()].map(item => `${item.name} x${item.quantity}`).join(', ');
    const service = bookingServiceOverride || (items ? `Electrician: ${items}` : 'Electrician: At Home Consultation');
    const payload = {
      service,
      name: formData.get('name'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      city: formData.get('city'),
      notes: formData.get('notes')
    };
    const status = document.getElementById('bookingStatus');
    status.textContent = 'Sending your booking request…';
    try {
      const response = await fetch('/book', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Could not send your booking request.');
      status.textContent = 'Thanks! Your electrician booking request has been received.';
      cart.clear();
      bookingServiceOverride = '';
      syncCart();
      form.reset();
      customerDate.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    } catch (error) {
      status.textContent = error.message || 'Please try again in a moment.';
    }
  });
})();
