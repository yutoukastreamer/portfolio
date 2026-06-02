/* ============================================================
   work.js — renders a single case study from ?id=<project>
   ============================================================ */

(function () {
  var L = window.Lang;

  function getId() {
    return new URLSearchParams(window.location.search).get("id");
  }

  function findProject(id) {
    return window.PROJECTS.filter(function (p) {
      return p.id === id;
    })[0];
  }

  function nextProject(id) {
    var list = window.PROJECTS;
    var i = list.map(function (p) { return p.id; }).indexOf(id);
    return list[(i + 1) % list.length];
  }

  function render(p) {
    document.title = "Yutouka.design — " + L.field(p.title);

    set("case-title", L.field(p.title));
    set("case-year", p.year);
    set("case-type", L.field(p.type));
    set("case-tools", p.tools.join(", "));
    set("case-brief", L.field(p.brief));
    set("case-solution", L.field(p.solution));

    // gallery
    var gallery = document.getElementById("case-gallery");
    gallery.innerHTML = "";
    p.images.forEach(function (src) {
      var fig = document.createElement("figure");
      fig.className = "reveal";
      fig.innerHTML =
        '<img src="' + src + '" alt="' + escapeAttr(L.field(p.title)) + '" loading="lazy">';
      gallery.appendChild(fig);
    });

    // next
    var np = nextProject(p.id);
    var nextEl = document.getElementById("case-next");
    nextEl.href = "work.html?id=" + encodeURIComponent(np.id);
    nextEl.innerHTML = "<em>" + escapeAttr(L.field(np.title)) + "</em>";

    var year = document.getElementById("foot-year");
    if (year) year.textContent = new Date().getFullYear();
  }

  function set(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function escapeAttr(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function notFound() {
    var root = document.getElementById("case-root");
    root.innerHTML =
      '<section class="case-hero wrap" style="min-height:60vh">' +
      '<a class="case-back" href="index.html#works"><span>←</span>' +
      '<span data-i18n="case.back">Назад к работам</span></a>' +
      '<h1 class="case-title" data-i18n="case.notFound">Проект не найден</h1></section>';
    L.apply();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var p = findProject(getId());

    window.Motion.cursor();
    window.Motion.smoothScroll();

    if (!p) {
      notFound();
      return;
    }

    render(p);
    L.onChange(function () {
      render(p);
    });

    window.Motion.reveal(document);
    window.Motion.refresh();
  });
})();
