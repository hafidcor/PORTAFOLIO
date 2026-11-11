document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Multilenguaje (ES / EN) ---------- */

const I18N = {
  es: {
    meta_title: "Hafid Coronel Manghi | Desarrollador Web Full-Stack",
    meta_description: "Portafolio profesional de Hafid Coronel Manghi, Desarrollador Web Full-Stack en Puerto Vallarta. MELMIR, Tasky, KPI Demo y más proyectos en producción con Next.js, TypeScript, Python y PostgreSQL.",
    nav_perfil: "Perfil",
    nav_experiencia: "Experiencia",
    nav_habilidades: "Habilidades",
    nav_proyectos: "Proyectos",
    nav_contacto: "Contacto",
    header_view_cv: "Ver CV",
    hero_availability: "Disponible para oportunidades",
    hero_eyebrow: "Desarrollador Web Full-Stack · Puerto Vallarta, México",
    hero_title: "Construyo software que <em>resuelve problemas reales.</em>",
    hero_text: "Desarrollador web full-stack e Ingeniero en Gestión de TI titulado. He lanzado plataformas propias en producción — un ERP, un sistema de tareas para hotelería y un sistema integral de gestión organizacional — con frontend, backend, bases de datos y autenticación de usuarios, de principio a fin.",
    hero_cta_projects: "Explorar proyectos <span>↗</span>",
    hero_cta_info: "Información profesional",
    metric_years: "Años en TI",
    metric_systems: "Sistemas en producción",
    metric_orgs: "Organizaciones",
    profile_role: "Desarrollador Web Full-Stack",
    profile_eyebrow: "Perfil profesional",
    profile_title: "Experiencia técnica con visión de negocio.",
    profile_p1: "He lanzado plataformas propias en producción — un ERP, un sistema de gestión de tareas y un sistema integral de gestión organizacional — usadas por organizaciones y negocios reales. Complemento ese trabajo con más de 10 años de experiencia técnica en soporte, redes y sistemas de negocio, lo que me da criterio para construir software que resuelve problemas operativos reales.",
    profile_p2: "Trabajo de principio a fin: frontend, backend, bases de datos, autenticación de usuarios y despliegue. También aplico inteligencia artificial para automatizar tareas y analizar información.",
    info_title: "Resumen ejecutivo",
    info_text: "Desarrollador full-stack adaptable a desarrollo web, soporte técnico, administración de redes o coordinación de TI. Combino resolución de incidencias, comunicación con usuarios y capacidad para crear soluciones digitales orientadas a resultados.",
    fact_edu: "Formación",
    fact_edu_v: "Ingeniería en Gestión de las TI · UVEG · Titulado",
    fact_cont: "Formación continua",
    fact_cont_v: "Análisis de datos con ChatGPT · En curso · UVEG / CoachBlockchain",
    fact_lang: "Idiomas",
    fact_lang_v: "Español nativo · Inglés B1, en mejora",
    fact_avail: "Disponibilidad",
    fact_avail_v: "Busco trabajo presencial; acepto remoto y estoy dispuesto a reubicación si la oferta vale la pena",
    exp_eyebrow: "Trayectoria",
    exp_title: "Experiencia laboral",
    exp1_date: "sep. 2025 – may. 2026",
    exp1_title: "Analista de Base de Datos",
    exp1_desc: "Administración de leads y oportunidades en Dynamics 365 con soporte funcional a usuarios. Reportes en Excel con tablas dinámicas, diseño de comunicados en Photoshop y operación de Q-SYS Core y MagicINFO.",
    exp2_date: "jun. 2021 – sep. 2025",
    exp2_title: "Analista TI",
    exp2_desc: "Reporté al Director de TI, coordinando recursos para cerca de 150 usuarios en oficinas y 5 obras. Administré Axovia, el servidor de Contpaq y tableros en Monday.com, con JotForm y seguimiento de incidencias en GLPI.",
    exp3_date: "dic. 2019 – mar. 2020",
    exp3_title: "Asistente de Sistemas",
    exp3_desc: "Soporte técnico a huéspedes, mantenimiento de equipos y administración del sistema INNSIST.",
    exp4_date: "sep. 2018 – dic. 2019",
    exp4_title: "Auxiliar de Sistemas",
    exp4_desc: "Soporte a redes, cableado estructurado, CCTV, telefonía IP y equipos de cómputo.",
    exp5_date: "abr. 2015 – abr. 2017",
    exp5_title: "Auxiliar de Sistemas",
    exp5_desc: "Soporte a redes, cableado estructurado, CCTV, telefonía IP y equipos de cómputo.",
    skills_eyebrow: "Especialidades",
    skills_title: "Herramientas que utilizo.",
    skill1_title: "Desarrollo web",
    skill1_text: "Next.js · React · Vite · TypeScript · Tailwind CSS · NextAuth · Autenticación de usuarios",
    skill2_title: "Backend y datos",
    skill2_text: "Python (web2py) · PHP · PostgreSQL · Prisma · Neon",
    skill3_title: "Despliegue y herramientas",
    skill3_text: "Git / GitHub · Vercel · Render · Docker · Cloudflare R2 · WordPress",
    skill4_title: "Sistemas de negocio y soporte",
    skill4_text: "Dynamics 365 · Excel (tablas dinámicas y reportes) · Contpaq · Google Workspace · Monday.com · GLPI · MikroTik · Fortinet · Photoshop",
    skills_note: "<strong>IA aplicada:</strong> automatización y análisis de datos con herramientas de IA en proyectos web.",
    proj_eyebrow: "Trabajo destacado",
    proj_title: "Soluciones digitales.",
    p1_label: "ERP · EN PRODUCCIÓN <span>2026 – PRESENTE</span>",
    p1_title: "MELMIR — ERP para producción y venta de hidromiel",
    p1_desc: "Sistema integral en producción para un negocio real de hidromiel: insumos, recetas, lotes de producción, inventario, ventas y punto de venta rápido. Costo real por lote desde el consumo real de insumos, con margen por botella; alertas de stock, dashboard con gráficas, clientes y cuentas por cobrar con abonos, pedidos anticipados, etapas de producción, usuarios con login y permisos, respaldo de base de datos, archivos en Cloudflare R2, código QR con ficha pública y aplicación instalable (PWA).",
    p1_live: "Ver en vivo ↗",
    p1_code: "Código ↗",
    p2_label: "HOTELERÍA · EN PRODUCCIÓN <span>2026</span>",
    p2_title: "Tasky — Gestión de tareas y mantenimiento",
    p2_desc: "Plataforma para registrar, asignar y dar seguimiento a tareas operativas y de mantenimiento por departamento, en operación para un hotel.",
    p2_link: "Visitar sitio ↗",
    p3_label: "RECURSOS HUMANOS · DEMO <span>2025</span>",
    p3_title: "KPI Demo — Sistema Integral de Gestión Organizacional",
    p3_desc: "Plataforma de recursos humanos con empleados y organigrama, evaluaciones y KPIs automatizados, y dashboards por rol (colaborador, RH y ejecutivo). Inventario de activos con QR, catálogo de beneficios, notificaciones y control de acceso basado en roles.",
    p3_link: "Ver demo ↗",
    p4_label: "TRÁMITES · DEMO <span>2025</span>",
    p4_title: "Gestión de Trámites — Sistema multi-tenant",
    p4_desc: "Sistema para registro y seguimiento del ciclo de vida de trámites, con usuarios, roles y permisos, reportes y métricas.",
    p4_link: "Ver demo ↗",
    p5_label: "WORDPRESS · PLUGIN <span>2025</span>",
    p5_title: "TramitesWP — Plugin de WordPress",
    p5_desc: "Plugin para gestión de solicitudes, documentos y empresas, con dashboard, shortcodes, roles y notificaciones.",
    p6_label: "PROPUESTA PARA CLIENTE <span>2025</span>",
    p6_title: "MSD Contractors — Página web para cliente",
    p6_desc: "Sitio web para empresa de remodelación en Puerto Vallarta. Propuesta presentada a un cliente de remodelación y diseño de interiores; no es un sistema en producción.",
    p6_tag1: "Sitio web",
    p6_tag2: "Propuesta",
    p6_link: "Ver propuesta ↗",
    rec_eyebrow: "Para reclutadores",
    rec_title: "Un perfil técnico, resolutivo y orientado al servicio.",
    rec_text: "Busco trabajo presencial; acepto remoto y estoy dispuesto a reubicación si la oferta vale la pena. Aporto experiencia práctica desde el primer día, con proyectos verificables en vivo y código disponible en GitHub.",
    rec_view_cv: "Ver CV",
    rec_view_letter: "Ver carta",
    contact_eyebrow: "Contacto",
    contact_title: "¿Hablamos de una oportunidad?",
    contact_text: "Mi correo y teléfono se muestran únicamente cuando lo solicites.",
    contact_show: "Mostrar datos de contacto",
    contact_hide: "Ocultar datos de contacto",
    contact_copy: "Copiar correo",
    contact_copied: "¡Copiado!",
    contact_mark: "Desarrollador Full-Stack",
    modal_download: "Descargar PDF ↗",
    modal_open_tab: "Abrir en pestaña nueva ↗",
    modal_close_btn: "Cerrar",
    modal_close_label: "Cerrar",
    pdf_viewer_title: "Visor de PDF",
    modal_fallback: "Tu navegador no puede mostrar el PDF aquí. Usa el botón Descargar PDF.",
    pdf_cv_title: "Currículum — Hafid Coronel Manghi",
    pdf_letter_title: "Carta de presentación — Hafid Coronel Manghi",
    footer_role: "Desarrollador Web Full-Stack · Puerto Vallarta, México",
    menu_open: "Abrir menú",
    menu_close: "Cerrar menú"
  },
  en: {
    meta_title: "Hafid Coronel Manghi | Full-Stack Web Developer",
    meta_description: "Professional portfolio of Hafid Coronel Manghi, Full-Stack Web Developer in Puerto Vallarta. MELMIR, Tasky, KPI Demo and more projects in production with Next.js, TypeScript, Python and PostgreSQL.",
    nav_perfil: "Profile",
    nav_experiencia: "Experience",
    nav_habilidades: "Skills",
    nav_proyectos: "Projects",
    nav_contacto: "Contact",
    header_view_cv: "View CV",
    hero_availability: "Available for opportunities",
    hero_eyebrow: "Full-Stack Web Developer · Puerto Vallarta, Mexico",
    hero_title: "I build software that <em>solves real problems.</em>",
    hero_text: "Full-stack web developer and licensed IT Management Engineer. I have launched my own platforms in production — an ERP, a task system for hotels, and a comprehensive organizational management system — covering frontend, backend, databases, and user authentication, end to end.",
    hero_cta_projects: "Explore projects <span>↗</span>",
    hero_cta_info: "Professional info",
    metric_years: "Years in IT",
    metric_systems: "Systems in production",
    metric_orgs: "Organizations",
    profile_role: "Full-Stack Web Developer",
    profile_eyebrow: "Professional profile",
    profile_title: "Technical experience with business vision.",
    profile_p1: "I have launched my own platforms in production — an ERP, a task management system, and a comprehensive organizational management system — used by real organizations and businesses. I complement that work with over 10 years of technical experience in support, networks, and business systems, which gives me the judgment to build software that solves real operational problems.",
    profile_p2: "I work end to end: frontend, backend, databases, user authentication, and deployment. I also apply artificial intelligence to automate tasks and analyze information.",
    info_title: "Executive summary",
    info_text: "Full-stack developer adaptable to web development, technical support, network administration, or IT coordination. I combine incident resolution, communication with users, and the ability to create results-oriented digital solutions.",
    fact_edu: "Education",
    fact_edu_v: "IT Management Engineering · UVEG · Licensed",
    fact_cont: "Continuing education",
    fact_cont_v: "Data analysis with ChatGPT · In progress · UVEG / CoachBlockchain",
    fact_lang: "Languages",
    fact_lang_v: "Native Spanish · English B1, improving",
    fact_avail: "Availability",
    fact_avail_v: "Seeking on-site work; open to remote and to relocating if the offer is worth it",
    exp_eyebrow: "Career",
    exp_title: "Work experience",
    exp1_date: "Sep 2025 – May 2026",
    exp1_title: "Database Analyst",
    exp1_desc: "Managed sales leads and opportunities in Dynamics 365, providing functional support to platform users. Created Excel reports with pivot tables, designed internal communications in Photoshop, and operated Q-SYS Core and MagicINFO.",
    exp2_date: "Jun 2021 – Sep 2025",
    exp2_title: "IT Analyst",
    exp2_desc: "Reported to the IT Director, coordinating resources for around 150 users across offices and 5 construction sites. Managed Axovia, the Contpaq server, and Monday.com project boards, with JotForm and GLPI incident tracking.",
    exp3_date: "Dec 2019 – Mar 2020",
    exp3_title: "Systems Assistant",
    exp3_desc: "Technical support for guests, equipment maintenance, and administration of the INNSIST system.",
    exp4_date: "Sep 2018 – Dec 2019",
    exp4_title: "Systems Support Assistant",
    exp4_desc: "Network support, structured cabling, CCTV, IP telephony, and computer equipment.",
    exp5_date: "Apr 2015 – Apr 2017",
    exp5_title: "Systems Support Assistant",
    exp5_desc: "Network support, structured cabling, CCTV, IP telephony, and computer equipment.",
    skills_eyebrow: "Specialties",
    skills_title: "Tools I use.",
    skill1_title: "Web development",
    skill1_text: "Next.js · React · Vite · TypeScript · Tailwind CSS · NextAuth · User authentication",
    skill2_title: "Backend and data",
    skill2_text: "Python (web2py) · PHP · PostgreSQL · Prisma · Neon",
    skill3_title: "Deployment and tools",
    skill3_text: "Git / GitHub · Vercel · Render · Docker · Cloudflare R2 · WordPress",
    skill4_title: "Business systems and support",
    skill4_text: "Dynamics 365 · Excel (pivot tables and reports) · Contpaq · Google Workspace · Monday.com · GLPI · MikroTik · Fortinet · Photoshop",
    skills_note: "<strong>Applied AI:</strong> automation and data analysis with AI tools in web projects.",
    proj_eyebrow: "Featured work",
    proj_title: "Digital solutions.",
    p1_label: "ERP · IN PRODUCTION <span>2026 – PRESENT</span>",
    p1_title: "MELMIR — ERP for mead production and sales",
    p1_desc: "Comprehensive system in production for a real mead business: supplies, recipes, production batches, inventory, sales, and fast point of sale. Real cost per batch from actual supply consumption, with margin per bottle; low-stock alerts, dashboard with charts, clients and accounts receivable with payments, preorders, production stages, users with login and permissions, database backup, files in Cloudflare R2, QR code with public page, and installable app (PWA).",
    p1_live: "View live ↗",
    p1_code: "Code ↗",
    p2_label: "HOSPITALITY · IN PRODUCTION <span>2026</span>",
    p2_title: "Tasky — Task and maintenance management",
    p2_desc: "Platform to log, assign, and track operational and maintenance tasks by department, in operation for a hotel.",
    p2_link: "Visit site ↗",
    p3_label: "HUMAN RESOURCES · DEMO <span>2025</span>",
    p3_title: "KPI Demo — Comprehensive Organizational Management System",
    p3_desc: "HR platform with employees and org chart, automated evaluations and KPIs, and dashboards by role (employee, HR, and executive). Asset inventory with QR, benefits catalog, notifications, and role-based access control.",
    p3_link: "View demo ↗",
    p4_label: "PROCEDURES · DEMO <span>2025</span>",
    p4_title: "Procedures Management — Multi-tenant system",
    p4_desc: "System to log and track the lifecycle of procedures, with users, roles and permissions, reports, and metrics.",
    p4_link: "View demo ↗",
    p5_label: "WORDPRESS · PLUGIN <span>2025</span>",
    p5_title: "TramitesWP — WordPress Plugin",
    p5_desc: "Plugin to manage requests, documents, and companies, with dashboard, shortcodes, roles, and notifications.",
    p6_label: "CLIENT PROPOSAL <span>2025</span>",
    p6_title: "MSD Contractors — Client website",
    p6_desc: "Website for a remodeling company in Puerto Vallarta. Proposal presented to a remodeling and interior design client; not a production system.",
    p6_tag1: "Website",
    p6_tag2: "Proposal",
    p6_link: "View proposal ↗",
    rec_eyebrow: "For recruiters",
    rec_title: "A technical, resourceful, service-oriented profile.",
    rec_text: "I am seeking on-site work; I am open to remote and to relocating if the offer is worth it. I bring hands-on experience from day one, with live verifiable projects and code available on GitHub.",
    rec_view_cv: "View CV",
    rec_view_letter: "View cover letter",
    contact_eyebrow: "Contact",
    contact_title: "Shall we talk about an opportunity?",
    contact_text: "My email and phone are only shown when you ask for them.",
    contact_show: "Show contact details",
    contact_hide: "Hide contact details",
    contact_copy: "Copy email",
    contact_copied: "Copied!",
    contact_mark: "Full-Stack Developer",
    modal_download: "Download PDF ↗",
    modal_open_tab: "Open in new tab ↗",
    modal_close_btn: "Close",
    modal_close_label: "Close",
    pdf_viewer_title: "PDF viewer",
    modal_fallback: "Your browser cannot display the PDF here. Use the Download PDF button.",
    pdf_cv_title: "Résumé — Hafid Coronel Manghi",
    pdf_letter_title: "Cover letter — Hafid Coronel Manghi",
    footer_role: "Full-Stack Web Developer · Puerto Vallarta, Mexico",
    menu_open: "Open menu",
    menu_close: "Close menu"
  }
};

let currentLang = "es";
let copyFlash = false;

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key;
}

function detectLang() {
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "es" || q === "en") return q;
  } catch (e) {}
  try {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (e) {}
  return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
}

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;
  document.title = dict.meta_title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", dict.meta_description);
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    const v = dict[el.dataset.i18nAria];
    if (v !== undefined) el.setAttribute("aria-label", v);
  });
  document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
    const v = dict[el.dataset.i18nTitle];
    if (v !== undefined) el.setAttribute("title", v);
  });
  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    const active = b.dataset.lang === lang;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", String(active));
  });
  const details = document.getElementById("contactDetails");
  const showBtn = document.getElementById("showContact");
  if (showBtn) showBtn.textContent = details && !details.hidden ? dict.contact_hide : dict.contact_show;
  const copyBtn = document.getElementById("copyEmail");
  if (copyBtn && !copyFlash) copyBtn.textContent = dict.contact_copy;
  const toggle = document.getElementById("menuToggle");
  if (toggle) {
    const open = document.querySelector(".site-header").classList.contains("nav-open");
    toggle.setAttribute("aria-label", open ? dict.menu_close : dict.menu_open);
  }
  try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
  try {
    const u = new URL(location.href);
    u.searchParams.set("lang", lang);
    history.replaceState(null, "", u);
  } catch (e) {}
}

function setLang(lang) {
  if (lang !== "es" && lang !== "en") return;
  applyLang(lang);
}

document.querySelectorAll(".lang-switch button").forEach(function (b) {
  b.addEventListener("click", function () { setLang(b.dataset.lang); });
});

/* ---------- Contacto ---------- */

const showBtn = document.getElementById("showContact");
showBtn.addEventListener("click", function (e) {
  const d = document.getElementById("contactDetails");
  if (!d) return;
  d.hidden = !d.hidden;
  e.currentTarget.textContent = d.hidden ? t("contact_show") : t("contact_hide");
});

const copyBtn = document.getElementById("copyEmail");
copyBtn.addEventListener("click", async function () {
  const email = "hafidcoronel438@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copyFlash = true;
    copyBtn.textContent = t("contact_copied");
  } catch (e) {
    copyBtn.textContent = email;
  }
  setTimeout(function () {
    copyFlash = false;
    copyBtn.textContent = t("contact_copy");
  }, 2000);
});

/* ---------- Menú móvil (hamburguesa) ---------- */

const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", function () {
  const open = header.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? t("menu_close") : t("menu_open"));
});
mainNav.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    header.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", t("menu_open"));
  });
});

/* ---------- Visor de PDF en ventana emergente ---------- */
// En móvil los navegadores no muestran PDFs dentro de un iframe y piden
// descargarlo; ahí se usa el visor de Google, que sí lo muestra en pantalla.
// En escritorio el PDF se muestra directo en el iframe.
function isMobileViewer() {
  return window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(max-width: 768px)").matches;
}
function viewerUrl(url) {
  return isMobileViewer() ? "https://docs.google.com/viewer?url=" + encodeURIComponent(url) + "&embedded=true" : url;
}
const modal = document.getElementById("pdfModal");
const frame = document.getElementById("pdfFrame");
const modalTitle = document.getElementById("pdfModalTitle");
const pdfDownload = document.getElementById("pdfDownload");
const pdfOpenTab = document.getElementById("pdfOpenTab");
let lastFocused = null;
function openPdf(titleKey, url) {
  if (!modal) return;
  lastFocused = document.activeElement;
  modalTitle.textContent = t(titleKey);
  frame.src = viewerUrl(url);
  pdfDownload.href = url;
  pdfOpenTab.href = url;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("pdfModalClose").focus();
}
function closePdf() {
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  frame.src = "about:blank";
  document.body.style.overflow = "";
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}
document.querySelectorAll("[data-open-pdf]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    openPdf(btn.dataset.titleKey, btn.dataset.url);
  });
});
document.getElementById("pdfModalClose").addEventListener("click", closePdf);
document.getElementById("pdfModalCloseBtn").addEventListener("click", closePdf);
modal.querySelector("[data-close-pdf]").addEventListener("click", closePdf);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePdf();
    header.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Animación suave al bajar y sección activa en el menú ---------- */

if ("IntersectionObserver" in window) {
  const revealEls = document.querySelectorAll(".hero-grid,.profile-card,.section > .container,.projects article,.skills article,.exp-item");
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) {
    el.classList.add("reveal");
    io.observe(el);
  });
  const spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      mainNav.querySelectorAll("a").forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + id);
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });
}

/* ---------- Idioma inicial ---------- */

applyLang(detectLang());
