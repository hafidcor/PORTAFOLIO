const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const photoInput = document.getElementById("photoInput");
const profilePhoto = document.getElementById("profilePhoto");
const avatarInitials = document.getElementById("avatarInitials");
const savedPhoto = localStorage.getItem("hafid-profile-photo");

function showPhoto(source) {
  profilePhoto.src = source;
  profilePhoto.hidden = false;
  avatarInitials.hidden = true;
}

profilePhoto?.addEventListener("error", () => {
  profilePhoto.hidden = true;
  avatarInitials.hidden = false;
});

if (savedPhoto) showPhoto(savedPhoto);

photoInput?.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (typeof reader.result === "string") {
      localStorage.setItem("hafid-profile-photo", reader.result);
      showPhoto(reader.result);
    }
  });
  reader.readAsDataURL(file);
});

const repoGrid = document.getElementById("repoGrid");
fetch("https://api.github.com/users/hafidcor/repos?sort=updated&per_page=6")
  .then((response) => {
    if (!response.ok) throw new Error("No se pudieron cargar los repositorios");
    return response.json();
  })
  .then((repos) => {
    if (!repoGrid) return;
    if (!repos.length) {
      repoGrid.innerHTML = "<p class='loading'>Aún no hay repositorios públicos para mostrar.</p>";
      return;
    }
    repoGrid.innerHTML = repos.map((repo) => `
      <article class="repo-card">
        <h3>${repo.name}</h3>
        <p>${repo.description || "Repositorio de Hafid Coronel Manghi."}</p>
        <div class="repo-meta">${repo.language || "Código"} · ★ ${repo.stargazers_count}</div>
        <a href="${repo.html_url}" target="_blank" rel="noreferrer">Ver en GitHub ↗</a>
      </article>
    `).join("");
  })
  .catch(() => {
    if (repoGrid) repoGrid.innerHTML = "<p class='loading'>Los repositorios pueden consultarse en <a href='https://github.com/hafidcor' target='_blank' rel='noreferrer'>github.com/hafidcor</a>.</p>";
  });
