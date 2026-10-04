document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) {
    var dropdownLink = dropdown.querySelector('a');
    dropdownLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 780) {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  }

  // Lightbox for full-size image links
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img alt="Enlarged screenshot">';
  document.body.appendChild(overlay);
  var lightboxImg = overlay.querySelector('img');

  overlay.addEventListener('click', function () {
    overlay.classList.remove('open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (/\.(png|jpe?g)$/i.test(href)) {
      e.preventDefault();
      lightboxImg.src = href;
      overlay.classList.add('open');
    }
  });
});
