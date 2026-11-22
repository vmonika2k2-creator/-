(() => {
  const estimateModal = document.getElementById('estimateModal');
  const estimateForm = document.getElementById('estimateForm');
  const estimateDate = document.getElementById('estimateDate');
  const photoViewer = document.getElementById('photoViewer');
  const viewerImage = document.getElementById('viewerImage');
  const viewerCaption = document.getElementById('viewerCaption');
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const photoDirectory = '/assets/painting/normal/';

  function localDateString(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  estimateDate.min = localDateString();

  function openEstimate(service) {
    document.getElementById('estimateService').value = service || 'Home Painting';
    document.getElementById('estimateTitle').textContent = service && service !== 'Home Painting'
      ? `Estimate for ${service}`
      : 'Get a free estimate';
    document.getElementById('formStatus').textContent = '';
    estimateModal.classList.add('open');
    estimateModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    window.setTimeout(() => document.getElementById('estimateName').focus(), 80);
  }

  function closeEstimate() {
    estimateModal.classList.remove('open');
    estimateModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function openPhoto(file, caption) {
    viewerImage.src = photoDirectory + encodeURIComponent(file);
    viewerImage.alt = caption;
    viewerCaption.textContent = caption;
    photoViewer.classList.add('open');
    photoViewer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closePhoto() {
    photoViewer.classList.remove('open');
    photoViewer.setAttribute('aria-hidden', 'true');
    viewerImage.src = '';
    if (!estimateModal.classList.contains('open')) document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('[data-estimate]').forEach(button => {
    button.addEventListener('click', () => openEstimate(button.dataset.estimate));
  });

  document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', () => {
      const details = button.closest('.service-content').querySelector('.service-more');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.innerHTML = expanded ? 'Show more <span aria-hidden="true">⌄</span>' : 'Show less <span aria-hidden="true">⌄</span>';
      details.hidden = expanded;
    });
  });

  document.querySelectorAll('.photo-trigger').forEach(button => {
    button.addEventListener('click', () => openPhoto(button.dataset.photo, button.dataset.caption));
  });

  document.querySelector('[data-close-estimate]').addEventListener('click', closeEstimate);
  estimateModal.addEventListener('click', event => { if (event.target === estimateModal) closeEstimate(); });
  document.querySelector('.viewer-close').addEventListener('click', closePhoto);
  photoViewer.addEventListener('click', event => { if (event.target === photoViewer) closePhoto(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeEstimate();
      closePhoto();
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open', !expanded);
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  estimateForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!estimateForm.reportValidity()) return;
    const status = document.getElementById('formStatus');
    const form = new FormData(estimateForm);
    const request = Object.fromEntries(form.entries());
    status.textContent = 'Sending your estimate request…';

    try {
      const response = await fetch('/book', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(request)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Could not send your request.');
      status.textContent = 'Thanks! Your estimate request has been received.';
      estimateForm.reset();
      estimateDate.min = localDateString();
      document.getElementById('estimateService').value = request.service;
    } catch (error) {
      status.textContent = error.message || 'Please try again in a moment.';
    }
  });
})();
