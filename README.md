# PORTAFOLIO

Portafolio profesional de Hafid Coronel Manghi, desplegable como sitio estático en Vercel.

## Estructura recomendada de Cloudflare R2

El frontend espera estos documentos públicos:

```text
documentos/cv/CV_Hafid_Coronel_Manghi.pdf
documentos/carta-presentacion/Carta_Presentacion_Hafid_Coronel_Manghi.pdf
```

La URL base se configura en `script.js` mediante `MEDIA_BASE`. Para producción es preferible usar un dominio personalizado de R2, por ejemplo `https://media.tudominio.com`, en lugar del endpoint interno.

La foto permanente del sitio debe estar en:

```text
assets/perfil-hafid.jpg
```

## Uso para reclutadores

La sección `Información para reclutadores` incluye enlaces al CV y carta, copia del enlace público y una opción para imprimir/guardar el perfil como PDF desde el navegador.

## Recomendaciones

- Agregar correo profesional, LinkedIn y teléfono únicamente si deseas hacerlos públicos.
- Mantener CV y carta como documentos públicos de solo lectura.
- No exponer claves de Cloudflare R2 en HTML, JavaScript ni GitHub.
- Usar una API o Worker protegido si más adelante se requieren cargas desde un panel privado.
- Añadir métricas verificables, certificaciones, capturas de proyectos y testimonios.
