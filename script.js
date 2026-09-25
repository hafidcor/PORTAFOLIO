const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Archivos estáticos incluidos en este despliegue de Vercel.
// Las rutas conservan los nombres originales del repositorio.
const PROFILE_IMAGE_URL = "foto/foto.png";
const documents = {
  cv: "docs/CV HAFID CORONEL.pdf",
  carta: "docs/Carta Presentación.pdf"
};

const profilePhoto = document.getElementById("profilePhoto");
const avatarInitials = document.getElementById("avatarInitials");
if (profilePhoto) {
  profilePhoto.src = PROFILE_IMAGE_URL;
  profilePhoto.alt = "Hafid Coronel Manghi";
  profilePhoto.addEventListener("load", () => {
    profilePhoto.style.display = "block";
    if (avatarInitials) avatarInitials.style.display = "none";
  });
  profilePhoto.addEventListener("error", () => {
    profilePhoto.style.display = "none";
    if (avatarInitials) avatarInitials.style.display = "grid";
  });
}

document.querySelectorAll("[data-document]").forEach((link) => {
  const path = documents[link.dataset.document];
  if (path) link.href = encodeURI(path);
});

document.getElementById("printProfile")?.addEventListener("click", () => window.print());

document.getElementById("copyProfile")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(window.location.href);
    button.textContent = "Enlace copiado";
    setTimeout(() => { button.textContent = "Copiar enlace"; }, 2000);
  } catch {
    button.textContent = "Copia la URL del navegador";
  }
});

document.getElementById("showContact")?.addEventListener("click", (event) => {
  const details = document.getElementById("contactDetails");
  const button = event.currentTarget;
  if (!details) return;
  details.hidden = !details.hidden;
  button.textContent = details.hidden ? "Mostrar datos de contacto" : "Ocultar datos de contacto";
});
