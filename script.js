const MEDIA_BASE = "https://1f0f8dbcbeacd8eea1a4e1433c2b5cba.r2.cloudflarestorage.com";
const FALLBACK_MEDIA_BASE = "assets";
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Los documentos deben existir en R2 con estas rutas. Si R2 no está público,
// sustituye MEDIA_BASE por tu dominio público personalizado de R2.
const documents = {
  cv: `${MEDIA_BASE}/documentos/cv/CV_Hafid_Coronel_Manghi.pdf`,
  carta: `${MEDIA_BASE}/documentos/carta-presentacion/Carta_Presentacion_Hafid_Coronel_Manghi.pdf`
};
document.querySelectorAll("[data-document]").forEach((link) => {
  link.href = documents[link.dataset.document] || FALLBACK_MEDIA_BASE;
});

document.getElementById("printProfile")?.addEventListener("click", () => window.print());
document.getElementById("copyProfile")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(window.location.href);
    button.textContent = "Enlace copiado";
    setTimeout(() => { button.textContent = "Copiar enlace del perfil"; }, 2200);
  } catch {
    button.textContent = "Copia la URL del navegador";
  }
});

const repoGrid = document.getElementById("repoGrid");
fetch("https://api.github.com/users/hafidcor/repos?sort=updated&per_page=6")
  .then((response) => { if (!response.ok) throw new Error(); return response.json(); })
  .then((repos) => {
    if (!repoGrid) return;
    repoGrid.innerHTML = repos.length ? repos.map((repo) => `<article class="repo-card"><h3>${repo.name}</h3><p>${repo.description || "Repositorio de Hafid Coronel Manghi."}</p><div class="repo-meta">${repo.language || "Código"} · ★ ${repo.stargazers_count}</div><a href="${repo.html_url}" target="_blank" rel="noreferrer">Ver en GitHub ↗</a></article>`).join("") : "<p class='loading'>Aún no hay repositorios públicos.</p>";
  })
  .catch(() => { if (repoGrid) repoGrid.innerHTML = "<p class='loading'>Consulta mis repositorios en <a href='https://github.com/hafidcor' target='_blank' rel='noreferrer'>GitHub</a>.</p>"; });
