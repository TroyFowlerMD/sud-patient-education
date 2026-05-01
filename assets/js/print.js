/* SUD Patient Education - print.js */
(function () {
  'use strict';
  function expandAll() {
    document.querySelectorAll('.accordion-card').forEach(function (c) { c.setAttribute('aria-expanded', 'true'); });
    document.querySelectorAll('.deeper-dive').forEach(function (d) { d.setAttribute('aria-expanded', 'true'); });
  }
  document.addEventListener('DOMContentLoaded', function () {
    var btnC = document.getElementById('btn-print-current');
    var btnF = document.getElementById('btn-print-full');
    if (btnC) btnC.addEventListener('click', function () { window.print(); });
    if (btnF) btnF.addEventListener('click', function () { expandAll(); setTimeout(function () { window.print(); }, 200); });
  });
}());
