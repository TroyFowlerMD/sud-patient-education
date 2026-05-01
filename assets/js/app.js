/* SUD Patient Education - app.js */
(function () {
  'use strict';
  function initAccordions() {
    document.querySelectorAll('.accordion-card__trigger').forEach(function (t) {
      t.addEventListener('click', function () {
        var card = this.closest('.accordion-card');
        var exp = card.getAttribute('aria-expanded') === 'true';
        card.setAttribute('aria-expanded', String(!exp));
      });
    });
  }
  function initDeeperDives() {
    document.querySelectorAll('.deeper-dive__trigger').forEach(function (t) {
      t.addEventListener('click', function () {
        var dd = this.closest('.deeper-dive');
        var exp = dd.getAttribute('aria-expanded') === 'true';
        dd.setAttribute('aria-expanded', String(!exp));
      });
    });
  }
  function expandAll() {
    document.querySelectorAll('.accordion-card').forEach(function (c) { c.setAttribute('aria-expanded', 'true'); });
    document.querySelectorAll('.deeper-dive').forEach(function (d) { d.setAttribute('aria-expanded', 'true'); });
  }
  function collapseAll() {
    document.querySelectorAll('.accordion-card').forEach(function (c) { c.setAttribute('aria-expanded', 'false'); });
    document.querySelectorAll('.deeper-dive').forEach(function (d) { d.setAttribute('aria-expanded', 'false'); });
  }
  document.addEventListener('DOMContentLoaded', function () {
    initAccordions();
    initDeeperDives();
    var e = document.getElementById('btn-expand-all');
    var c = document.getElementById('btn-collapse-all');
    if (e) e.addEventListener('click', expandAll);
    if (c) c.addEventListener('click', collapseAll);
  });
}());
