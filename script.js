// URL pública base de Cloudflare R2 para documentos e imágenes.
const MEDIA_BASE = "https://pub-d04ff4123ba64ab5bf9bb4af219686b0.r2.dev";
// Pega aquí la URL pública de tu foto cuando la subas a R2, por ejemplo:
// const PROFILE_IMAGE_URL = `${MEDIA_BASE}/imagenes/perfil/hafid-coronel.jpg`;
const PROFILE_IMAGE_URL = "";

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const profilePhoto = document.getElementById("profilePhoto");
const avatarInitials = document.getElementById("avatarInitials");
if (PROFILE_IMAGE_URL && profilePhoto) {
  profilePhoto.src = PROFILE_IMAGE_URL;
  profilePhoto.addEventListener("load", () => { avatarInitials.hidden = true; });
  profilePhoto.addEventListener("error", () => { profilePhoto.hidden = true; });
} else if (profilePhoto) {
  profilePhoto.hidden = true;
}

const documents = {
  cv: `${MEDIA_BASE}/documentos/cv/CV_Hafid_Coronel_Manghi.pdf`,
  carta: `${MEDIA_BASE}/documentos/carta-presentacion/Carta_Presentacion_Hafid_Coronel_Manghi.pdf`
};
document.querySelectorAll("[data-document]").forEach((link) => {
  link.href = documents[link.dataset.document];
});

document.getElementById("printProfile")?.addEventListener("click", () => window.print());
document.getElementById("copyProfile")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(window.location.href);
    button.textContent = "Enlace copiado";
    setTimeout(() => { button.textContent = "Copiar enlace"; }, 2200);
  } catch {
    button.textContent = "Copia la URL del navegador";
  }
});

document.getElementById("showContact")?.addEventListener("click", (event) => {
  const details = document.getElementById("contactDetails");
  const button = event.currentTarget;
  details.hidden = !details.hidden;
  button.textContent = details.hidden ? "Mostrar datos de contacto" : "Ocultar datos de contacto";
});

const repoGrid = document.getElementById("repoGrid");
fetch("https://api.github.com/users/hafidcor/repos?sort=updated&per_page=6")
  .then((response) => { if (!response.ok) throw new Error(); return response.json(); })
  .then((repos) => {
    if (!repoGrid) return;
    repoGrid.innerHTML = repos.length ? repos.map((repo) => `<article class="repo-card"><h3>${repo.name}</h3><p>${repo.description || "Repositorio de Hafid Coronel Manghi."}</p><div class="repo-meta">${repo.language || "Código"} · ★ ${repo.stargazers_count}</div><a href="${repo.html_url}" target="_blank" rel="noreferrer">Ver en GitHub ↗</a></article>`).join("") : "<p class='loading'>Aún no hay repositorios públicos.</p>";
  })
  .catch(() => { if (repoGrid) repoGrid.innerHTML = "<p class='loading'>Consulta mis repositorios en <a href='https://github.com/hafidcor' target='_blank' rel='noreferrer'>GitHub</a>.</p>"; });
