/* =========================================================
   PORTFOLIO — INDIE GAME DEVELOPER
   JavaScript vanilla, sans dépendance.
   ---------------------------------------------------------
   Pour personnaliser, modifie les blocs CONFIG et PROJECTS ci-dessous.
   Les textes (FR/EN) sont dans js/i18n.js.
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     CONFIG
     --------------------------------------------------------- */
  const CONFIG = {
    // Adresse de réception des messages du formulaire.
    email: "belinafitahintsoaisitraka.ismael@gmail.com",

    // Endpoint d'un service de formulaire (ex. Formspree : "https://formspree.io/f/xxxxxxx").
    // Laisse vide pour utiliser le repli "mailto:" (ouvre le client mail du visiteur).
    formEndpoint: "",

    // Langue par défaut si le navigateur n'est pas en français : "en" ou "fr".
    defaultLang: "en"
  };

  /* ---------------------------------------------------------
     PROJECTS — partie non traduite (images, statut).
     Les textes se trouvent dans js/i18n.js (projects.<clé>.*).
     gallery : liste d'images réelles, ex. ["assets/img/gallery/cendres-01.png"].
     Tant que la liste est vide, la galerie affiche « captures à venir ».
     --------------------------------------------------------- */
  const PROJECTS = {
    cendres: {
      title: "LES CENDRES DE NÉRA",
      cover: "assets/img/cover-cendres.svg",
      statusKey: "projects.statusDev",
      statusCls: "status-dev",
      gallery: []
    },
    zombie: {
      title: "ZOMBIE SURVIVAL",
      cover: "assets/img/cover-zombie.svg",
      statusKey: "projects.statusConcept",
      statusCls: "status-concept",
      gallery: []
    }
  };

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const toastEl = $("#toast");
  let toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 4200);
  }

  function el(tag, props, children) {
    const n = document.createElement(tag);
    Object.assign(n, props || {});
    (children || []).forEach((c) => n.appendChild(c));
    return n;
  }

  /* ---------------------------------------------------------
     Langue (FR / EN)
     --------------------------------------------------------- */
  const I18N = window.I18N || {};
  const STORAGE_KEY = "portfolio-lang";
  let lang = detectLang();
  let currentProject = null;   // clé du projet ouvert dans la modale
  let statusKey = null;        // dernier message du formulaire (pour le retraduire)
  let statusType = "";

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (e) { /* stockage indisponible */ }
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    if (/^fr/i.test(nav) && I18N.fr) return "fr";
    return I18N[CONFIG.defaultLang] ? CONFIG.defaultLang : "en";
  }

  function lookup(dict, path) {
    return path.split(".").reduce((o, k) => (o == null ? o : o[k]), dict);
  }
  function t(path) {
    const v = lookup(I18N[lang] || {}, path);
    if (v != null) return v;
    const fallback = lookup(I18N.en || {}, path);
    return fallback != null ? fallback : path;
  }

  function applyLang() {
    const year = new Date().getFullYear();
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((n) => {
      n.textContent = String(t(n.dataset.i18n)).replace("{year}", year);
    });
    $$("[data-i18n-alt]").forEach((n) => { n.alt = t(n.dataset.i18nAlt); });
    $$("[data-i18n-aria]").forEach((n) => {
      const suffix = n.dataset.ariaSuffix ? ": " + n.dataset.ariaSuffix : "";
      n.setAttribute("aria-label", t(n.dataset.i18nAria) + suffix);
    });

    // Titre de l'onglet + description
    document.title = t("meta.title");
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.desc"));

    // Tags des cartes projet
    ["cendres", "zombie"].forEach((k) => {
      const ul = $("#tags-" + k);
      const tags = t("projects." + k + ".tags");
      if (!ul || !Array.isArray(tags)) return;
      ul.textContent = "";
      tags.forEach((label) => ul.appendChild(el("li", { textContent: label })));
    });

    // Boutons de langue
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    // Éléments dynamiques
    updateMenuLabel();
    $("#modalCloseBtn").setAttribute("aria-label", t("projects.modal.close"));
    $("[data-lb-close]").setAttribute("aria-label", t("projects.modal.lbClose"));
    $("[data-lb-prev]").setAttribute("aria-label", t("projects.modal.lbPrev"));
    $("[data-lb-next]").setAttribute("aria-label", t("projects.modal.lbNext"));
    if (currentProject && !modal.hidden) renderProject(currentProject);
    if (form) {
      Object.keys(rules).forEach((name) => {
        if (form.elements[name].closest(".field").classList.contains("invalid")) validateField(name);
      });
    }
    if (statusKey) setStatus(statusKey, statusType);
  }

  function setLang(next) {
    if (!I18N[next] || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignoré */ }
    applyLang();
  }

  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------------------------------------------------------
     Header : état « scrolled » + menu responsive
     --------------------------------------------------------- */
  const header = $("#header");
  const nav = $("#nav");
  const navToggle = $("#navToggle");

  function onScrollHeader() {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  function updateMenuLabel() {
    const open = nav.classList.contains("open");
    navToggle.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
  }
  function setMenu(open) {
    nav.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("no-scroll", open);
    updateMenuLabel();
  }
  navToggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  $$(".nav-link").forEach((l) => l.addEventListener("click", () => setMenu(false)));
  window.addEventListener("resize", () => { if (window.innerWidth > 820) setMenu(false); });

  /* ---------------------------------------------------------
     Lien actif selon la section visible
     --------------------------------------------------------- */
  const sections = $$("main section[id]");
  const links = $$(".nav-link");
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------------------------------------------------------
     Animations d'entrée au scroll
     --------------------------------------------------------- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach((e) => io.observe(e));
  } else {
    revealEls.forEach((e) => e.classList.add("in"));
  }

  /* ---------------------------------------------------------
     Particules du hero (canvas, léger, en pause hors écran)
     --------------------------------------------------------- */
  (function particles() {
    const canvas = $("#particles");
    if (!canvas || reduceMotion) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, parts = [], raf = 0, visible = true;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((w * h) / 18000));
      parts = Array.from({ length: count }, spawn);
    }

    function spawn() {
      const ember = Math.random() < 0.7;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.45 + 0.12),
        a: Math.random() * 0.6 + 0.2,
        c: ember ? "214,40,40" : "65,105,225",
        tw: Math.random() * Math.PI * 2
      };
    }

    function frame() {
      if (!visible) { raf = 0; return; }
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        p.tw += 0.03;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        const alpha = p.a * (0.6 + 0.4 * Math.sin(p.tw));
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + p.c + "," + alpha.toFixed(3) + ")";
        ctx.shadowColor = "rgba(" + p.c + ",.8)";
        ctx.shadowBlur = 8;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((e) => {
        visible = e[0].isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(frame);
      }).observe(canvas);
    }
    raf = requestAnimationFrame(frame);
  })();

  /* ---------------------------------------------------------
     Modale projet + galerie + lightbox
     --------------------------------------------------------- */
  const modal = $("#projectModal");
  const modalPanel = $(".modal-panel", modal);
  const lightbox = $("#lightbox");
  const lbImg = $("#lbImg");
  let lastFocus = null;
  let currentGallery = [];
  let lbIndex = 0;

  function renderProject(key) {
    const p = PROJECTS[key];
    const base = "projects." + key;
    if (!p) return;

    const cover = $("#modalCover");
    cover.src = p.cover;
    cover.alt = t(base + ".coverAlt");
    $("#modalGenre").textContent = t(base + ".genre");
    $("#modalTitle").textContent = p.title;

    const st = $("#modalStatus");
    st.textContent = t(p.statusKey);
    st.className = "status " + p.statusCls;

    const desc = $("#modalDesc");
    desc.textContent = "";
    (t(base + ".modal.paras") || []).forEach((txt) => desc.appendChild(el("p", { textContent: txt })));
    const bullets = t(base + ".modal.bullets") || [];
    if (bullets.length) {
      desc.appendChild(el("ul", {}, bullets.map((b) => el("li", { textContent: b }))));
    }

    const meta = $("#modalMeta");
    meta.textContent = "";
    (t(base + ".modal.meta") || []).forEach(([k, v]) => {
      meta.appendChild(el("div", {}, [el("dt", { textContent: k }), el("dd", { textContent: v })]));
    });

    $("#modalGalleryTitle").textContent = t("projects.modal.gallery");
    const gal = $("#modalGallery");
    gal.textContent = "";
    currentGallery = p.gallery || [];
    if (!currentGallery.length) {
      gal.appendChild(el("p", { className: "gallery-empty", textContent: t("projects.modal.empty") }));
    } else {
      currentGallery.forEach((src, i) => {
        const img = el("img", { src: src, alt: p.title + " — " + t("projects.modal.imgAlt") + " " + (i + 1), loading: "lazy" });
        const btn = el("button", { type: "button" }, [img]);
        btn.setAttribute("aria-label", t("projects.modal.enlarge") + " " + (i + 1));
        btn.addEventListener("click", () => openLightbox(i));
        gal.appendChild(btn);
      });
    }
  }

  function openProject(key) {
    if (!PROJECTS[key]) return;
    lastFocus = document.activeElement;
    currentProject = key;
    renderProject(key);
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    modalPanel.scrollTop = 0;
    modalPanel.focus();
  }

  function closeProject() {
    modal.hidden = true;
    currentProject = null;
    document.body.classList.remove("no-scroll");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  $$("[data-open]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      openProject(trigger.dataset.open);
    });
  });
  $$("[data-close]", modal).forEach((b) => b.addEventListener("click", closeProject));

  function openLightbox(i) {
    lbIndex = i;
    showLb();
    lightbox.hidden = false;
  }
  function showLb() {
    lbImg.src = currentGallery[lbIndex];
    lbImg.alt = (lbIndex + 1) + " / " + currentGallery.length;
  }
  function closeLightbox() { lightbox.hidden = true; }
  function stepLb(d) {
    lbIndex = (lbIndex + d + currentGallery.length) % currentGallery.length;
    showLb();
  }
  $("[data-lb-close]").addEventListener("click", closeLightbox);
  $("[data-lb-prev]").addEventListener("click", () => stepLb(-1));
  $("[data-lb-next]").addEventListener("click", () => stepLb(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.hidden) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLb(-1);
      if (e.key === "ArrowRight") stepLb(1);
      return;
    }
    if (!modal.hidden && e.key === "Escape") closeProject();
    if (nav.classList.contains("open") && e.key === "Escape") setMenu(false);
  });

  /* ---------------------------------------------------------
     Bouton Download CV
     Vérifie que le fichier existe ; sinon, affiche un message neutre.
     --------------------------------------------------------- */
  const cvBtn = $("#cvBtn");
  if (cvBtn) {
    cvBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = cvBtn.getAttribute("href");
      fetch(url, { method: "HEAD" })
        .then((r) => {
          if (r.ok) return startDownload(url);
          toast(t("contact.cvMissing"));
        })
        .catch(() => { window.location.href = url; }); // ex. ouverture en file://
    });
  }
  function startDownload(url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  /* ---------------------------------------------------------
     Formulaire de contact : validation + envoi
     --------------------------------------------------------- */
  const form = $("#contactForm");
  const statusEl = $("#formStatus");
  const submitBtn = $("#submitBtn");

  const rules = {
    name: (v) => (v.trim().length >= 2 ? "" : t("contact.errName")),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : t("contact.errEmail")),
    subject: () => "",
    message: (v) => (v.trim().length >= 10 ? "" : t("contact.errMessage"))
  };

  function validateField(name) {
    const input = form.elements[name];
    const msg = rules[name](input.value);
    const field = input.closest(".field");
    field.classList.toggle("invalid", Boolean(msg));
    $('[data-error-for="' + name + '"]', form).textContent = msg;
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }

  Object.keys(rules).forEach((name) => {
    const input = form.elements[name];
    input.addEventListener("blur", () => validateField(name));
    input.addEventListener("input", () => {
      if (input.closest(".field").classList.contains("invalid")) validateField(name);
    });
  });

  // key = clé de traduction (ex. "contact.ok") ; "" pour effacer
  function setStatus(key, type) {
    statusKey = key || null;
    statusType = type || "";
    statusEl.textContent = key ? t(key) : "";
    statusEl.className = "form-status" + (type ? " " + type : "");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("");

    // Honeypot : un robot remplit ce champ caché.
    if (form.elements.website.value) return;

    const valid = Object.keys(rules).map(validateField).every(Boolean);
    if (!valid) {
      const firstInvalid = $(".field.invalid input, .field.invalid textarea", form);
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const data = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      subject: form.elements.subject.value.trim() || t("contact.defaultSubject"),
      message: form.elements.message.value.trim()
    };

    // Option A : service de formulaire configuré
    if (CONFIG.formEndpoint) {
      submitBtn.disabled = true;
      setStatus("contact.sending");
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        form.reset();
        setStatus("contact.ok", "ok");
      } catch (err) {
        setStatus("contact.fail", "err");
      } finally {
        submitBtn.disabled = false;
      }
      return;
    }

    // Option B (repli) : ouvre le client mail avec le message pré-rempli
    const body = data.message + "\n\n— " + data.name + " (" + data.email + ")";
    const href =
      "mailto:" + CONFIG.email +
      "?subject=" + encodeURIComponent(data.subject) +
      "&body=" + encodeURIComponent(body);
    window.location.href = href;
    setStatus("contact.mailto", "ok");
  });

  /* ---------------------------------------------------------
     Démarrage
     --------------------------------------------------------- */
  applyLang();
})();
