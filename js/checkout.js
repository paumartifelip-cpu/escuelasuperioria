/* Bloque de pago: precio, cupón y métodos de pago.
 * CONFIGURA AQUÍ: precio, cupones válidos y enlaces de pago reales. */
(function () {
  'use strict';

  var PRICE = 290;                 // euros
  var COUPONS = { 'ESIA7K4QX9M2': 9.99 };// código (mayúsculas) -> precio final en euros
  var PAY_LINKS = {
    stripe: 'https://buy.stripe.com/aFa28t3N47iZglCcRT5Ne0J',
    bizum: 'https://buy.stripe.com/aFa28t3N47iZglCcRT5Ne0J'
  };

  var $ = function (id) { return document.getElementById(id); };
  if (!$('checkout')) return;

  function eur(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
  var current = PRICE;

  function render(label) {
    $('co-total').textContent = eur(current);
    $('co-total2').textContent = eur(current);
    var row = $('co-disc-row');
    if (current < PRICE) {
      row.hidden = false;
      $('co-disc-label').textContent = 'Cupón ' + label;
      $('co-disc').textContent = '-' + eur(PRICE - current);
    } else row.hidden = true;
  }

  function say(el, text, cls) { el.textContent = text; el.className = 'co-msg ' + cls; el.hidden = false; }

  $('co-coupon').addEventListener('submit', function (e) {
    e.preventDefault();
    var code = $('co-code').value.trim().toUpperCase();
    var msg = $('co-msg');
    if (!code) { current = PRICE; render(); msg.hidden = true; return; }
    if (Object.prototype.hasOwnProperty.call(COUPONS, code)) {
      current = COUPONS[code]; render(code);
      say(msg, 'Cupón aplicado: pagas ' + eur(current) + '.', 'ok');
    } else {
      current = PRICE; render();
      say(msg, 'Este código no es válido.', 'err');
    }
  });

  Array.prototype.forEach.call(document.querySelectorAll('.co-btn'), function (b) {
    b.addEventListener('click', function () {
      var link = PAY_LINKS[b.getAttribute('data-method')];
      if (link) window.location.href = link;
      else say($('co-pay-msg'), 'Este método de pago aún no está conectado.', 'err');
    });
  });
})();
