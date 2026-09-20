/* ============================================================
   EL COR DE MARTA — navegación compartida + iconografía Haring
   Este único archivo controla la cabecera, el pie y la
   navegación de TODAS las páginas del sitio, para que sea
   siempre idéntica.
   ============================================================ */

(function () {
  "use strict";

  var COLORS = ["#F0392B", "#FFCB05", "#0071CE", "#1BA64C", "#EC49A0"];

  /* ---------- Icono: corazón (logo de la marca) ---------- */
  function heartIcon(color, stroke) {
    color = color || "#EC49A0";
    stroke = stroke !== false;
    return (
      '<svg viewBox="0 0 32 32" class="haring-fig" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M16 28.5S3 20.4 3 11.9C3 7.5 6.4 4 10.6 4c2.5 0 4.6 1.2 5.4 3 .8-1.8 2.9-3 5.4-3C25.6 4 29 7.5 29 11.9 29 20.4 16 28.5 16 28.5Z" ' +
      'fill="' + color + '" ' + (stroke ? 'stroke="#0B0B0B" stroke-width="2"' : "") + " />" +
      "</svg>"
    );
  }

  /* ---------- Icono: estrella ---------- */
  function starIcon(color) {
    return (
      '<svg viewBox="0 0 32 32" class="haring-fig" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M16 2l3.6 9.3 9.9.6-7.7 6.4 2.6 9.7L16 22.3 7.6 28l2.6-9.7-7.7-6.4 9.9-.6L16 2Z" ' +
      'fill="' + color + '" stroke="#0B0B0B" stroke-width="2" stroke-linejoin="round"/>' +
      "</svg>"
    );
  }

  /* ---------- Icono: perrito (guiño al clásico "barking dog") ---------- */
  function dogIcon(color) {
    return (
      '<svg viewBox="0 0 40 34" class="haring-fig" xmlns="http://www.w3.org/2000/svg">' +
      '<g fill="' + color + '" stroke="#0B0B0B" stroke-width="2.4" stroke-linejoin="round">' +
      '<rect x="9" y="12" width="20" height="13" rx="6"/>' +
      '<circle cx="12" cy="10" r="7"/>' +
      '<path d="M6 4l4 5-6 1Z"/><path d="M18 4l-4 5 6 1Z"/>' +
      '<rect x="10" y="23" width="5" height="9" rx="2"/><rect x="22" y="23" width="5" height="9" rx="2"/>' +
      "</g></svg>"
    );
  }

  /* ---------- Icono: zigzag / trazo de energía ---------- */
  function zigzagIcon(color) {
    return (
      '<svg viewBox="0 0 40 28" class="haring-fig" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M3 24 12 6 20 20 28 4 37 22" fill="none" stroke="' + color + '" stroke-width="6" ' +
      'stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg>"
    );
  }

  /* ---------- Figura bailando "a bloques" (estilo Lego/Haring) ---------- */
  function danceFigure(color, pose, withRadiate) {
    color = color || "#F0392B";
    pose = pose || 1;
    var body =
      pose === 2
        ? /* pose 2: corriendo, un brazo arriba */
          '<rect x="34" y="0" width="32" height="32" rx="16" fill="' + color + '" stroke="#0B0B0B" stroke-width="5"/>' +
          '<rect x="30" y="36" width="40" height="38" rx="12" fill="' + color + '" stroke="#0B0B0B" stroke-width="5"/>' +
          '<rect x="8" y="4" width="34" height="14" rx="7" fill="' + color + '" stroke="#0B0B0B" stroke-width="5" transform="rotate(-30 25 11)"/>' +
          '<rect x="60" y="34" width="34" height="14" rx="7" fill="' + color + '" stroke="#0B0B0B" stroke-width="5" transform="rotate(25 77 41)"/>' +
          '<rect x="14" y="70" width="36" height="14" rx="7" fill="' + color + '" stroke="#0B0B0B" stroke-width="5" transform="rotate(55 32 77)"/>' +
          '<rect x="52" y="70" width="36" height="14" rx="7" fill="' + color + '" stroke="#0B0B0B" stroke-width="5" transform="rotate(-15 70 77)"/>'
        : /* pose 1: salto en estrella */
          '<circle cx="50" cy="18" r="16" fill="' + color + '" stroke="#0B0B0B" stroke-width="5"/>' +
          '<rect x="34" y="36" width="32" height="38" rx="13" fill="' + color + '" stroke="#0B0B0B" stroke-width="5"/>' +
          '<rect x="6" y="22" width="36" height="14" rx="7" fill="' + color + '" stroke="#0B0B0B" stroke-width="5" transform="rotate(-38 24 29)"/>' +
          '<rect x="58" y="22" width="36" height="14" rx="7" fill="' + color + '" stroke="#0B0B0B" stroke-width="5" transform="rotate(38 76 29)"/>' +
          '<rect x="10" y="70" width="36" height="14" rx="7" fill="' + color + '" stroke="#0B0B0B" stroke-width="5" transform="rotate(42 28 77)"/>' +
          '<rect x="54" y="70" width="36" height="14" rx="7" fill="' + color + '" stroke="#0B0B0B" stroke-width="5" transform="rotate(-42 72 77)"/>';

    var radiate = withRadiate
      ? '<g class="radiate" stroke="' + color + '" stroke-width="5" stroke-linecap="round">' +
        '<line x1="50" y1="-6" x2="50" y2="-18"/>' +
        '<line x1="8" y1="4" x2="-4" y2="-4"/>' +
        '<line x1="92" y1="4" x2="104" y2="-4"/>' +
        "</g>"
      : "";

    return (
      '<svg viewBox="-24 -22 148 120" class="haring-fig" xmlns="http://www.w3.org/2000/svg">' +
      body +
      radiate +
      "</svg>"
    );
  }

  window.HaringIcons = {
    heart: heartIcon,
    star: starIcon,
    dog: dogIcon,
    zigzag: zigzagIcon,
    dance: danceFigure,
    colors: COLORS
  };

  /* ================= Cabecera y pie compartidos ================= */

  var LINKS = [
    { href: "index.html", label: "Inicio", id: "inicio" },
    { href: "corets.html", label: "Corets", id: "corets" },
    { href: "familias.html", label: "Familias", id: "familias", sub: [{ href: "recursos.html", label: "Recursos", id: "recursos" }] },
    { href: "docentes.html", label: "Docentes", id: "docentes" }
  ];

  function buildNavLinks(activePage) {
    return LINKS.map(function (item) {
      var isActive = item.id === activePage || (item.sub && item.sub.some(function (s) { return s.id === activePage; }));
      var cls = isActive ? ' class="active"' : "";
      if (item.sub) {
        var subHtml = item.sub
          .map(function (s) {
            var subActive = s.id === activePage ? ' class="active"' : "";
            return '<a href="' + s.href + '"' + subActive + ">" + s.label + "</a>";
          })
          .join("");
        return (
          '<div class="has-sub">' +
          '<a href="' + item.href + '"' + cls + ">" + item.label + "</a>" +
          '<div class="submenu">' + subHtml + "</div>" +
          "</div>"
        );
      }
      return '<a href="' + item.href + '"' + cls + ">" + item.label + "</a>";
    }).join("");
  }

  function buildHeader(activePage) {
    return (
      "<header>" +
      '<div class="nav-row">' +
      '<a class="brand" href="index.html">' +
      heartIcon("#EC49A0") +
      '<span class="brand-name">El cor de Marta</span>' +
      "</a>" +
      '<button id="menu-btn" aria-controls="primary-nav" aria-expanded="false" aria-label="Abrir menú">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
      "</button>" +
      '<nav class="primary" id="primary-nav">' +
      buildNavLinks(activePage) +
      "</nav>" +
      "</div>" +
      "</header>"
    );
  }

  function buildFooter() {
    return (
      "<footer>" +
      '<div class="haring-border" data-count="16"><div class="track"></div></div>' +
      '<div class="wrap footer-inner">' +
      '<div class="footer-grid">' +
      "<div>" +
      '<a class="brand" href="index.html">' +
      heartIcon("#FFCB05") +
      '<span class="brand-name">El cor de Marta</span>' +
      "</a>" +
      "<p>Un lugar de encuentro, recursos y apoyo para toda nuestra comunidad educativa.</p>" +
      "</div>" +
      '<div class="school-link">Para más consultas, accede a la <a href="https://portal.edu.gva.es/cervantescastello/es/inicio/" target="_blank" rel="noopener">web oficial del centro</a>.</div>' +
      "</div>" +
      '<div class="fineprint"><span>© <span id="year"></span> El cor de Marta</span><span>Página actualizada</span></div>' +
      "</div>" +
      "</footer>"
    );
  }

  /* ================= Borde animado (marquee Haring) ================= */
  function fillHaringBorder(el) {
    var count = parseInt(el.getAttribute("data-count"), 10) || 14;
    var icons = [heartIcon, starIcon, dogIcon, zigzagIcon];
    var track = el.querySelector(".track");
    if (!track) return;
    var items = [];
    for (var i = 0; i < count; i++) {
      var color = COLORS[i % COLORS.length];
      var icon = icons[i % icons.length](color);
      items.push(icon);
    }
    // Se duplica la fila para lograr un scroll continuo sin costuras.
    track.innerHTML = items.join("") + items.join("");
  }

  /* ================= Inicialización ================= */
  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page") || "inicio";
    var headerSlot = document.getElementById("site-header");
    var footerSlot = document.getElementById("site-footer");
    if (headerSlot) headerSlot.outerHTML = buildHeader(page);
    if (footerSlot) footerSlot.outerHTML = buildFooter();

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Menú móvil
    var menuBtn = document.getElementById("menu-btn");
    var nav = document.getElementById("primary-nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
      });
      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Bordes animados
    document.querySelectorAll(".haring-border").forEach(fillHaringBorder);

    // Figuras decorativas sueltas (data-fig="dance|heart|star|dog|zigzag")
    document.querySelectorAll("[data-fig]").forEach(function (el) {
      var type = el.getAttribute("data-fig");
      var color = el.getAttribute("data-color") || COLORS[0];
      var pose = parseInt(el.getAttribute("data-pose"), 10) || 1;
      if (type === "dance") el.innerHTML = danceFigure(color, pose, true);
      else if (type === "heart") el.innerHTML = heartIcon(color);
      else if (type === "star") el.innerHTML = starIcon(color);
      else if (type === "dog") el.innerHTML = dogIcon(color);
      else if (type === "zigzag") el.innerHTML = zigzagIcon(color);
    });
  });
})();
