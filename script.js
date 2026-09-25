const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// La fotografía se sirve exclusivamente desde Cloudflare R2.
const MEDIA_BASE = "https://pub-d04ff4123ba64ab5bf9bb4af219686b0.r2.dev";
const PROFILE_IMAGE_URL = `${MEDIA_BASE}/foto/foto.png`;

const avatar = document.querySelector(".avatar");
if (avatar) {
  avatar.innerHTML = "";
  const image = document.createElement("img");
  image.src = PROFILE_IMAGE_URL;
  image.alt = "Hafid Coronel Manghi";
  image.loading = "eager";
  image.addEventListener("error", () => {
    avatar.textContent = "HC";
    avatar.classList.add("image-failed");
  });
  avatar.appendChild(image);
}

// Oculta cualquier control antiguo de cambio de foto que pudiera existir en una versión previa.
document.querySelectorAll(".photo-upload, .photo-help, #photoInput").forEach((element) => {
  element.remove();
});

const documents = {
  cv: `${MEDIA_BASE}/docs/CV%20HAFID%20CORONEL.pdf`,
  carta: `${MEDIA_BASE}/docs/Carta%20Presentaci%C3%B3n.pdf`
};

document.querySelectorAll("[data-document]").forEach((link) => {
  const documentUrl = documents[link.dataset.document];
  if (documentUrl) link.href = documentUrl;
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
