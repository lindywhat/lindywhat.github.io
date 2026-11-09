// Small bits of interactivity for the What's Hop!? pages:
// mobile menu, tabs, FAQ questions that open and close, and the venue map.

(function () {
  document.documentElement.classList.add('js');

  // --- Mobile menu ---
  var toggle = document.querySelector('.wh-menu-toggle');
  var menu = document.getElementById('wh-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // --- Tabs ---
  document.querySelectorAll('.wh-tabs').forEach(function (tabs) {
    var buttons = tabs.querySelectorAll('.wh-tabs-buttons button');
    var panels = tabs.querySelectorAll('.wh-tab');
    buttons.forEach(function (button, i) {
      button.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        panels[i].classList.add('active');
      });
    });
  });

  // --- FAQ: every "### Question" becomes a question that opens and closes ---
  document.querySelectorAll('.wh-faq .wh-section .wh-container').forEach(function (box) {
    box.querySelectorAll('h3').forEach(function (h3) {
      var details = document.createElement('details');
      var summary = document.createElement('summary');
      var answer = document.createElement('div');
      summary.innerHTML = h3.innerHTML;
      details.appendChild(summary);
      details.appendChild(answer);
      var next = h3.nextElementSibling;
      while (next && !/^H[123]$/.test(next.tagName)) {
        var move = next;
        next = next.nextElementSibling;
        answer.appendChild(move);
      }
      h3.replaceWith(details);
    });
  });

  // --- Map with pins (Venues page) ---
  var mapEl = document.getElementById('wh-map');
  if (mapEl && window.L) {
    var pins = JSON.parse(mapEl.getAttribute('data-pins'));
    var map = L.map(mapEl, { scrollWheelZoom: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var bounds = [];
    pins.forEach(function (pin) {
      var marker = L.circleMarker([pin.lat, pin.lng], {
        radius: 10, weight: 2, color: '#fff', fillColor: pin.color || '#3388ff', fillOpacity: 1
      }).addTo(map);
      marker.bindTooltip(pin.title, { direction: 'right', offset: [10, 0] });
      marker.bindPopup('<strong>' + pin.title + '</strong>');
      bounds.push([pin.lat, pin.lng]);
    });
    if (bounds.length) map.fitBounds(bounds, { padding: [40, 40] });
  }
})();
