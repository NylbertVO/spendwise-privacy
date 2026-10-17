/* ===== CONFIG: paste your real APK download URL between the quotes below. =====
   Leave it empty ("") until your APK is hosted (e.g. a GitHub Release link). */
var DOWNLOAD_URL = "";
/* ============================================================================ */
(function () {
  var t = document.querySelector(".tog"), m = document.getElementById("menu");
  if (t && m) {
    t.addEventListener("click", function () {
      var o = m.classList.toggle("open");
      t.setAttribute("aria-expanded", o);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && m.classList.contains("open")) { m.classList.remove("open"); t.setAttribute("aria-expanded", "false"); t.focus(); }
    });
  }
  document.querySelectorAll("[data-download]").forEach(function (b) {
    if (DOWNLOAD_URL) { b.href = DOWNLOAD_URL; b.removeAttribute("aria-disabled"); }
    else {
      b.href = "#download"; b.setAttribute("aria-disabled", "true");
      b.addEventListener("click", function (e) { e.preventDefault(); var n = document.getElementById("dl-note"); if (n) n.hidden = false; });
    }
  });
  document.querySelectorAll("[data-year]").forEach(function (e) { e.textContent = new Date().getFullYear(); });
})();
w
