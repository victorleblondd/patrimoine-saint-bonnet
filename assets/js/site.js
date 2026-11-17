// Menu repliable sur téléphone. Sans JavaScript, le menu reste affiché en entier.
(function () {
  'use strict';
  var bouton = document.querySelector('.bouton-menu');
  var menu = document.getElementById('menu-principal');
  if (!bouton || !menu) return;

  function fermer(rendreFocus) {
    bouton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('ouverte');
    if (rendreFocus) bouton.focus();
  }

  bouton.addEventListener('click', function () {
    var ouvert = bouton.getAttribute('aria-expanded') === 'true';
    bouton.setAttribute('aria-expanded', String(!ouvert));
    menu.classList.toggle('ouverte', !ouvert);
  });

  // Échap referme le menu et rend le focus au bouton
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && bouton.getAttribute('aria-expanded') === 'true') fermer(true);
  });

  // Tableaux larges : la zone qui défile devient atteignable au clavier seulement si elle déborde
  // (elle prend alors le nom de la légende de son tableau).
  var zones = document.querySelectorAll('.tableau-defilant');
  function verifier() {
    zones.forEach(function (z) {
      var legende = z.querySelector('caption[id]');
      if (z.scrollWidth > z.clientWidth + 1) {
        z.setAttribute('tabindex', '0');
        z.setAttribute('role', 'region');
        if (legende) z.setAttribute('aria-labelledby', legende.id);
      } else {
        z.removeAttribute('tabindex');
        z.removeAttribute('role');
        z.removeAttribute('aria-labelledby');
      }
    });
  }
  if (zones.length) { verifier(); window.addEventListener('resize', verifier); }
})();
