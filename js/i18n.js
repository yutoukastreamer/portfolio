/* ============================================================
   i18n.js — bilingual RU/EN switch
   - reads/writes choice from localStorage
   - applies dictionary to any [data-i18n] element
   - exposes window.Lang for other scripts (home.js / work.js)
   ============================================================ */

(function () {
  var KEY = "yutouka-lang";
  var SUPPORTED = ["ru", "en"];

  function detect() {
    var saved = localStorage.getItem(KEY);
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return nav === "ru" ? "ru" : "en";
  }

  var current = detect();
  var listeners = [];

  function t(key) {
    var dict = window.I18N[current] || {};
    return dict[key] != null ? dict[key] : key;
  }

  // pick the right field from a { ru, en } object
  function field(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[current] != null ? obj[current] : obj.en;
  }

  function applyStatic() {
    document.documentElement.lang = current;
    // text content
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    // attributes:  data-i18n-attr="aria-label:key,title:key2"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr")
        .split(",")
        .forEach(function (pair) {
          var p = pair.split(":");
          if (p.length === 2) el.setAttribute(p[0].trim(), t(p[1].trim()));
        });
    });
    // active state on the switch
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === current);
    });
  }

  function set(lang) {
    if (SUPPORTED.indexOf(lang) === -1 || lang === current) return;
    current = lang;
    localStorage.setItem(KEY, lang);
    applyStatic();
    listeners.forEach(function (fn) {
      fn(current);
    });
  }

  // public API
  window.Lang = {
    get: function () {
      return current;
    },
    set: set,
    t: t,
    field: field,
    apply: applyStatic,
    onChange: function (fn) {
      listeners.push(fn);
    },
  };

  // wire up the switch + first paint
  document.addEventListener("DOMContentLoaded", function () {
    localStorage.setItem(KEY, current);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        set(b.getAttribute("data-lang"));
      });
    });
    applyStatic();
  });
})();
