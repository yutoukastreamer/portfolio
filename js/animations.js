/* ============================================================
   animations.js — shared motion layer (GSAP + ScrollTrigger + Lenis)
   - preloader, custom cursor, smooth scroll, scroll reveal, marquee
   - all guarded by prefers-reduced-motion
   ============================================================ */

window.Motion = (function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = typeof window.gsap !== "undefined";

  if (hasGSAP && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------- preloader ---------- */
  function preloader(done) {
    var el = document.querySelector(".preloader");
    if (!el) {
      if (done) done();
      return;
    }
    if (reduced || !hasGSAP) {
      el.remove();
      document.body.classList.add("is-ready");
      if (done) done();
      return;
    }
    var bar = el.querySelector(".preloader__bar i");
    var letters = el.querySelectorAll(".preloader__brand span");
    var tl = gsap.timeline({
      onComplete: function () {
        el.remove();
        document.body.classList.add("is-ready");
        ScrollTrigger.refresh();
        if (done) done();
      },
    });
    tl.from(letters, {
      yPercent: 110,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.03,
    })
      .to(bar, { width: "100%", duration: 0.9, ease: "power2.inOut" }, "-=0.3")
      .to(el, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" }, "+=0.15");
  }

  /* ---------- custom cursor ---------- */
  function cursor() {
    if (reduced || window.matchMedia("(pointer: coarse)").matches) return;
    var dot = document.querySelector(".cursor__dot");
    var ring = document.querySelector(".cursor__ring");
    if (!dot || !ring) return;
    document.body.classList.add("has-cursor");

    var mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    var rx = mx,
      ry = my;

    window.addEventListener("mousemove", function (e) {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = "translate(" + mx + "px," + my + "px)";
    });

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = "translate(" + rx + "px," + ry + "px)";
      requestAnimationFrame(loop);
    }
    // dot/ring use translate from top-left; override CSS centering
    dot.style.transform = "translate(" + mx + "px," + my + "px)";
    ring.style.transform = "translate(" + rx + "px," + ry + "px)";
    requestAnimationFrame(loop);

    // grow on interactive elements (delegated, also covers dynamic content)
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest("a, button, .work-card, .magnetic")) {
        ring.classList.add("is-hover");
      }
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest("a, button, .work-card, .magnetic")) {
        ring.classList.remove("is-hover");
      }
    });
  }

  /* ---------- smooth scroll (Lenis + GSAP ticker) ---------- */
  var lenis = null;
  function smoothScroll() {
    if (reduced || typeof window.Lenis === "undefined") return;
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    if (hasGSAP && window.ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      requestAnimationFrame(function raf(t) {
        lenis.raf(t);
        requestAnimationFrame(raf);
      });
    }
    // smooth anchor jumps
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1 && document.querySelector(id)) {
          e.preventDefault();
          lenis.scrollTo(id, { offset: -20 });
        }
      });
    });
  }

  /* ---------- scroll reveal ---------- */
  function reveal(scope) {
    var root = scope || document;
    var items = root.querySelectorAll(".reveal");
    if (reduced || !hasGSAP || !window.ScrollTrigger) {
      items.forEach(function (el) {
        el.classList.add("in");
      });
      return;
    }
    items.forEach(function (el) {
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: function () {
          el.classList.add("in");
        },
      });
    });
  }

  /* ---------- split a heading into animated lines ---------- */
  function revealHeadingLines(el) {
    if (!el) return;
    var lines = el.querySelectorAll(".line > span");
    if (reduced || !hasGSAP || !lines.length) return;
    gsap.set(lines, { yPercent: 110 });
    gsap.to(lines, {
      yPercent: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.08,
      delay: 0.1,
    });
  }

  /* ---------- infinite marquee ---------- */
  function marquee(track, speed) {
    if (!track) return;
    if (reduced || !hasGSAP) return;
    // duplicate content so the loop is seamless
    track.innerHTML += track.innerHTML;
    var total = track.scrollWidth / 2;
    gsap.to(track, {
      x: -total,
      duration: total / (speed || 60),
      ease: "none",
      repeat: -1,
    });
  }

  return {
    reduced: reduced,
    preloader: preloader,
    cursor: cursor,
    smoothScroll: smoothScroll,
    reveal: reveal,
    revealHeadingLines: revealHeadingLines,
    marquee: marquee,
    refresh: function () {
      if (hasGSAP && window.ScrollTrigger) ScrollTrigger.refresh();
    },
  };
})();
