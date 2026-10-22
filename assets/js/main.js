// Small bits of interactivity: mobile menu, homepage photo slider,
// and hiding events whose date has passed.

(function () {
  // --- Mobile menu ---
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('main-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // --- Photo slider on the homepage ---
  var slider = document.querySelector('.slider');
  if (slider) {
    var slides = slider.querySelectorAll('.slide');
    var current = 0;
    var timer;
    var show = function (index) {
      slides[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
    };
    var start = function () {
      clearInterval(timer);
      timer = setInterval(function () { show(current + 1); }, 6000);
    };
    slider.querySelector('.slider-prev').addEventListener('click', function () { show(current - 1); start(); });
    slider.querySelector('.slider-next').addEventListener('click', function () { show(current + 1); start(); });
    if (slides.length > 1) start();
  }

  // --- Hide past events ---
  // The website is only rebuilt when something changes, so an event can
  // still be in the page after its date. Hide it in the browser.
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  document.querySelectorAll('.event-list').forEach(function (list) {
    var limit = parseInt(list.getAttribute('data-limit'), 10) || 1000;
    var visible = 0;
    list.querySelectorAll('.event').forEach(function (event) {
      var parts = event.getAttribute('data-end').split('-');
      var end = new Date(parts[0], parts[1] - 1, parts[2]);
      if (end < today || visible >= limit) {
        event.style.display = 'none';
      } else {
        event.style.display = 'flex';
        visible++;
      }
    });
    var empty = list.querySelector('.no-events');
    if (empty) empty.hidden = visible > 0;
  });
})();
