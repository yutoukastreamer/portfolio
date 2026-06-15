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
    var mockups = null;
    var title = L.field(p.title);

    p.images.forEach(function (item) {
      // legacy: plain string = full-width image
      if (typeof item === "string") {
        var f = document.createElement("figure");
        f.className = "reveal";
        f.innerHTML =
          '<img src="' + item + '" alt="' + escapeAttr(title) + '" loading="lazy">';
        gallery.appendChild(f);
        return;
      }

      // flipbook: a magazine you leaf through
      if (item.type === "flipbook") {
        gallery.appendChild(buildFlipbook(item, title));
        return;
      }

      // embed: a live website inside a browser frame
      if (item.type === "embed") {
        gallery.appendChild(buildEmbed(item, title));
        return;
      }

      var caption = item.caption ? L.field(item.caption) : "";
      var alt = title + (caption ? " — " + caption : "");

      // feature: image + description beside it
      if (item.feature) {
        var fig = document.createElement("figure");
        fig.className = "case-feature reveal";
        var text =
          '<div class="case-feature__text">' +
          (caption ? '<span class="eyebrow">' + escapeAttr(caption) + "</span>" : "") +
          (item.note ? "<p>" + escapeAttr(L.field(item.note)) + "</p>" : "") +
          "</div>";
        fig.innerHTML =
          '<div class="case-feature__media"><img src="' + item.src +
          '" alt="' + escapeAttr(alt) + '" loading="lazy"></div>' + text;
        gallery.appendChild(fig);
        return;
      }

      // everything else: staggered mockup grid
      if (!mockups) {
        mockups = document.createElement("div");
        mockups.className = "case-mockups";
        gallery.appendChild(mockups);
      }
      var m = document.createElement("figure");
      m.className = "case-mockup reveal" + (item.video ? " has-video" : "");
      m.innerHTML =
        '<div class="case-mockup__media"><img src="' + item.src +
        '" alt="' + escapeAttr(alt) + '" loading="lazy">' +
        (item.video
          ? '<video src="' + item.video +
            '" muted loop playsinline preload="none"></video>' +
            '<span class="case-mockup__cue" aria-hidden="true">▶</span>'
          : "") +
        "</div>" +
        (caption ? "<figcaption>" + escapeAttr(caption) + "</figcaption>" : "");
      mockups.appendChild(m);

      // numbered sheet plays its matching clip on hover
      if (item.video) {
        (function (fig, vid) {
          fig.addEventListener("mouseenter", function () {
            fig.classList.add("is-playing");
            var pr = vid.play();
            if (pr && pr.catch) pr.catch(function () {});
          });
          fig.addEventListener("mouseleave", function () {
            fig.classList.remove("is-playing");
            vid.pause();
            vid.currentTime = 0;
          });
        })(m, m.querySelector("video"));
      }
    });

    // next
    var np = nextProject(p.id);
    var nextEl = document.getElementById("case-next");
    nextEl.href = "work.html?id=" + encodeURIComponent(np.id);
    nextEl.innerHTML = "<em>" + escapeAttr(L.field(np.title)) + "</em>";

    var year = document.getElementById("foot-year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- embed: a live website inside a browser frame ---------- */
  function buildEmbed(item, title) {
    var caption = item.caption ? L.field(item.caption) : "";
    var note = item.note ? L.field(item.note) : "";
    var url = item.url;
    var label = item.label || url;
    var poster = item.poster
      ? ' style="background-image:url(' + item.poster + ')"'
      : "";

    var fig = document.createElement("div");
    fig.className = "case-embed reveal";
    fig.innerHTML =
      '<div class="browser">' +
      '<div class="browser__bar">' +
      '<span class="browser__dots"><i></i><i></i><i></i></span>' +
      '<span class="browser__url"><a href="' + url +
      '" target="_blank" rel="noopener">' + escapeAttr(label) + "</a></span>" +
      '<a class="browser__open magnetic" href="' + url +
      '" target="_blank" rel="noopener" aria-label="' + escapeAttr(title) +
      ' — открыть в новой вкладке">↗</a>' +
      "</div>" +
      '<div class="browser__view"' + poster + ">" +
      '<iframe src="' + url + '" title="' + escapeAttr(title) +
      '" loading="lazy" allow="fullscreen" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
      "</div>" +
      "</div>" +
      (caption || note
        ? '<div class="case-embed__note">' +
          (caption ? '<span class="eyebrow">' + escapeAttr(caption) + "</span>" : "") +
          (note ? "<p>" + escapeAttr(note) + "</p>" : "") +
          "</div>"
        : "");
    return fig;
  }

  /* ---------- flipbook: leaf through pages like a magazine ---------- */
  function buildFlipbook(item, title) {
    var pages = item.pages.slice();
    if (pages.length % 2 !== 0) pages.push(null); // pad to whole leaves
    var leafCount = pages.length / 2;
    var caption = item.caption ? L.field(item.caption) : "";
    var note = item.note ? L.field(item.note) : "";

    var root = document.createElement("div");
    root.className = "flipbook reveal";

    var head =
      (caption || note)
        ? '<div class="flipbook__head">' +
          (caption ? '<span class="eyebrow">' + escapeAttr(caption) + "</span>" : "") +
          (note ? "<p>" + escapeAttr(note) + "</p>" : "") +
          "</div>"
        : "";

    var leavesHTML = "";
    for (var i = 0; i < leafCount; i++) {
      var front = pages[i * 2];
      var back = pages[i * 2 + 1];
      leavesHTML +=
        '<div class="leaf" data-leaf="' + i + '">' +
        '<div class="leaf__face leaf__front">' +
        (front ? '<img src="' + front + '" alt="' + escapeAttr(title) + '" loading="lazy">' : "") +
        "</div>" +
        '<div class="leaf__face leaf__back">' +
        (back ? '<img src="' + back + '" alt="' + escapeAttr(title) + '" loading="lazy">' : "") +
        "</div>" +
        "</div>";
    }

    root.innerHTML =
      head +
      '<div class="flipbook__stage">' +
      '<div class="flipbook__book">' + leavesHTML + "</div>" +
      "</div>" +
      '<div class="flipbook__bar">' +
      '<button class="flipbook__btn magnetic" type="button" data-dir="-1" aria-label="prev">←</button>' +
      '<span class="flipbook__count" aria-live="polite"></span>' +
      '<button class="flipbook__btn magnetic" type="button" data-dir="1" aria-label="next">→</button>' +
      "</div>";

    initFlipbook(root, pages.length);
    return root;
  }

  function initFlipbook(root, pageTotal) {
    var leaves = [].slice.call(root.querySelectorAll(".leaf"));
    var total = leaves.length;
    var current = 0; // number of flipped leaves
    var count = root.querySelector(".flipbook__count");

    function updateZ() {
      leaves.forEach(function (leaf, i) {
        leaf.style.zIndex = i < current ? String(i + 1) : String(total - i);
      });
    }

    function updateCount() {
      var left = current === 0 ? null : current * 2; // 1-indexed page on the left
      var right = current >= total ? null : current * 2 + 1; // page on the right
      var label = !left ? pad(right) : !right ? pad(left) : pad(left) + "–" + pad(right);
      count.innerHTML = "<b>" + label + "</b> / " + pageTotal;
    }

    function pad(n) {
      return n < 10 ? "0" + n : String(n);
    }

    function go(dir) {
      if (dir > 0 && current < total) {
        var leaf = leaves[current];
        leaf.style.zIndex = String(total + 1);
        leaf.classList.add("is-flipped");
        current++;
      } else if (dir < 0 && current > 0) {
        current--;
        var lf = leaves[current];
        lf.style.zIndex = String(total + 1);
        lf.classList.remove("is-flipped");
      } else {
        return;
      }
      updateCount();
      window.setTimeout(updateZ, 920);
    }

    root.querySelectorAll(".flipbook__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        go(parseInt(b.getAttribute("data-dir"), 10));
      });
    });

    // click the page: right half → forward, left half → back
    root.querySelector(".flipbook__stage").addEventListener("click", function (e) {
      var r = this.getBoundingClientRect();
      go(e.clientX - r.left > r.width / 2 ? 1 : -1);
    });

    updateZ();
    updateCount();
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
