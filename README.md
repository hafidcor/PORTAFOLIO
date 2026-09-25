# PORTAFOLIO

Portafolio profesional de Hafid Coronel Manghi, desplegable como sitio estático en Vercel.

## Archivos públicos en Cloudflare R2

La URL pública configurada es:

`https://pub-d04ff4123ba64ab5bf9bb4af219686b0.r2.dev`

El sitio espera estos objetos:

```text
documentos/cv/CV_Hafid_Coronel_Manghi.pdf
documentos/carta-presentacion/Carta_Presentacion_Hafid_Coronel_Manghi.pdf
imagenes/perfil/hafid-coronel.jpg
```

Para mostrar la foto, edita `PROFILE_IMAGE_URL` en `script.js`:

```js
const PROFILE_IMAGE_URL = `${MEDIA_BASE}/imagenes/perfil/hafid-coronel.jpg`;
```

No coloques claves secretas de Cloudflare en el frontend. El frontend solo usa la URL pública `r2.dev`.
