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

  // Enlace de pago con el cupón ya escrito en Stripe (si hay cupón válido).
  function payLink(method, code) {
    var link = PAY_LINKS[method];
    if (link && code) link += (link.indexOf('?') < 0 ? '?' : '&') + 'prefilled_promo_code=' + encodeURIComponent(code);
    return link;
  }

  function sayIn(el, text, cls) { el.textContent = text; el.className = 'co-msg ' + cls; el.hidden = false; }

  // Cupón en la parte de arriba de la página: valida y redirige a Stripe.
  if ($('top-coupon')) {
    $('top-coupon').addEventListener('submit', function (e) {
      e.preventDefault();
      var code = $('top-code').value.trim().toUpperCase();
      var msg = $('top-msg');
      if (!code) { sayIn(msg, 'Escribe tu código de descuento.', 'err'); return; }
      if (!Object.prototype.hasOwnProperty.call(COUPONS, code)) { sayIn(msg, 'Este código no es válido.', 'err'); return; }
      sayIn(msg, 'Cupón aplicado: pagas ' + COUPONS[code].toFixed(2).replace('.', ',') + ' €. Te llevamos al pago…', 'ok');
      window.location.href = payLink('stripe', code);
    });
  }

  if (!$('checkout')) return;

  function eur(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
  var current = PRICE;
  var applied = '';

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
    applied = '';
    if (!code) { current = PRICE; render(); msg.hidden = true; return; }
    if (Object.prototype.hasOwnProperty.call(COUPONS, code)) {
      current = COUPONS[code]; applied = code; render(code);
      say(msg, 'Cupón aplicado: pagas ' + eur(current) + '. Al pulsar el botón de pago irás a Stripe con el código ya puesto.', 'ok');
    } else {
      current = PRICE; render();
      say(msg, 'Este código no es válido.', 'err');
    }
  });

  Array.prototype.forEach.call(document.querySelectorAll('.co-btn'), function (b) {
    b.addEventListener('click', function () {
      var link = payLink(b.getAttribute('data-method'), applied);
      if (link) window.location.href = link;
      else say($('co-pay-msg'), 'Este método de pago aún no está conectado.', 'err');
    });
  });
})();
