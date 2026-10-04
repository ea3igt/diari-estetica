// Amplia les imatges marcades amb data-ampliar. Sense dependències.
document.addEventListener('click', function (e) {
  var a = e.target.closest('a[data-ampliar]');
  if (!a) return;
  e.preventDefault();
  var capa = document.createElement('div');
  capa.className = 'ampliacio';
  capa.innerHTML = '<img src="' + a.getAttribute('href') + '" alt="">';
  capa.addEventListener('click', function () { capa.remove(); });
  document.addEventListener('keydown', function esc(k) { if (k.key === 'Escape') { capa.remove(); document.removeEventListener('keydown', esc); } });
  document.body.appendChild(capa);
});
