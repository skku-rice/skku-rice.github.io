// Search and university filter on the Speakers and Posters pages. Pages work without this script.
(function () {
  var grid = document.getElementById("speaker-grid");
  if (!grid) return;
  var text = document.getElementById("f-text");
  var uni = document.getElementById("f-uni");
  var count = document.getElementById("f-count");
  var cards = Array.prototype.slice.call(grid.querySelectorAll(".speaker-card"));
  function apply() {
    var q = text.value.trim().toLowerCase(), shown = 0;
    cards.forEach(function (c) {
      var ok = (!q || c.dataset.text.indexOf(q) !== -1) && (!uni.value || c.dataset.uni === uni.value);
      c.style.display = ok ? "" : "none";
      if (ok) shown++;
    });
    count.textContent = shown + " / " + cards.length;
  }
  [text, uni].forEach(function (el) { el.addEventListener("input", apply); });
  apply();
})();
