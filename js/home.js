/* ============================================================
   home.js — builds the home page from PROJECTS + boots motion
   ============================================================ */

(function () {
  var L = window.Lang;

  /* ---------- render the works gallery ---------- */
  function renderWorks() {
    var grid = document.getElementById("work-grid");
    if (!grid) return;
    grid.innerHTML = "";
    window.PROJECTS.forEach(function (p) {
      var a = document.createElement("a");
      a.className = "work-card reveal";
      a.href = "work.html?id=" + encodeURIComponent(p.id);
      a.innerHTML =
        '<div class="work-card__media">' +
        '<span class="work-card__index">[' + p.index + "]</span>" +
        '<img src="' + p.cover + '" alt="' + escapeHtml(L.field(p.title)) + '" loading="lazy">' +
        "</div>" +
        '<div class="work-card__foot">' +
        '<h3 class="work-card__title">' + escapeHtml(L.field(p.title)) + "</h3>" +
        '<span class="work-card__type">' + escapeHtml(L.field(p.type)) + " · " + p.year + "</span>" +
        "</div>";
      grid.appendChild(a);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- contact + socials from SITE ---------- */
  function renderContact() {
    var mail = document.getElementById("contact-mail");
    if (mail) {
      mail.textContent = window.SITE.email;
      mail.href = "mailto:" + window.SITE.email;
    }
    var socials = document.getElementById("contact-socials");
    if (socials) {
      socials.innerHTML = "";
      window.SITE.socials.forEach(function (s) {
        var a = document.createElement("a");
        a.href = s.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = s.label;
        socials.appendChild(a);
      });
    }
    var year = document.getElementById("foot-year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderWorks();
    renderContact();

    // re-render dynamic copy when language changes
    L.onChange(function () {
      renderWorks();
      window.Motion.reveal(document.getElementById("work-grid"));
      window.Motion.refresh();
    });

    window.Motion.cursor();
    window.Motion.smoothScroll();
    window.Motion.marquee(document.getElementById("marquee-track"), 70);

    window.Motion.preloader(function () {
      window.Motion.revealHeadingLines(document.querySelector(".hero__title"));
      window.Motion.reveal(document);
    });
  });
})();
