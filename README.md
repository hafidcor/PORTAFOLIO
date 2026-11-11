# PORTAFOLIO — Hafid Coronel Manghi

Portafolio profesional de Hafid Coronel Manghi, Desarrollador Web Full-Stack en Puerto Vallarta, México. Sitio estático (HTML + CSS + JS) desplegado en Vercel.

- **En vivo:** https://portafolio-eight-ebon-27.vercel.app/
- **Repositorio:** https://github.com/hafidcor/PORTAFOLIO

## Contenido

- **Perfil:** desarrollador full-stack, Ingeniero en Gestión de las TI titulado (UVEG), con más de 10 años de experiencia técnica en soporte, redes y sistemas de negocio.
- **Experiencia:** Grupo Vidanta, GOVACASA, Marival Group, Royal Holiday y Hotel Friendly Vallarta.
- **Habilidades:** Next.js, React, TypeScript, Tailwind CSS, NextAuth, Python (web2py), PHP, PostgreSQL, Prisma, Neon, Git/GitHub, Vercel, Render, Docker, Cloudflare R2, WordPress, Dynamics 365, Excel y GLPI.
- **Proyectos destacados:**
  - **MELMIR** — ERP para producción y venta de hidromiel, en producción: https://melmir.vercel.app/ · código: https://github.com/hafidcor/MELMIR
  - **Tasky** — gestión de tareas y mantenimiento para hotelería, en producción: https://taskygo.com.mx/ (Render gratuito: puede tardar unos segundos en despertar)
  - **KPI Demo** — sistema integral de gestión organizacional (RH), demo: https://kpi-lime.vercel.app/
  - **Gestión de Trámites** — sistema multi-tenant, demo: https://sistema-gestion-tramites.vercel.app/
  - **TramitesWP** — plugin de WordPress en PHP (repositorio privado, sin enlace público)
  - **MSD Contractors** — propuesta de página web para un cliente (no es un sistema en producción): https://demomsd-nine.vercel.app/

No se enlazan proyectos descontinuados ni repositorios vacíos (CSN y Gestión de Facturas se retiraron del portafolio en noviembre de 2026).

## Visor de PDF en ventana emergente

Los botones "Ver CV" (encabezado y "Para reclutadores") y "Ver carta" abren el PDF en una ventana emergente sobre la página, sin salir del portafolio. Dentro de la ventana hay botones para descargar el PDF o abrirlo en una pestaña nueva. En celular la ventana ocupa toda la pantalla. Se cierra con la ×, con el botón Cerrar, con la tecla Escape o tocando fuera de la ventana. El PDF se carga solo al abrir la ventana.

## Diseño

- **Menú móvil:** en pantallas de 900 px o menos el menú se abre con el botón de hamburguesa (☰) del encabezado.
- **Favicon:** ícono "HC" en formato SVG dentro del propio HTML, sin archivos extra.
- **Vista previa al compartir:** `og:image` y `twitter:image` con la foto de perfil, para que el enlace se vea con imagen en WhatsApp y LinkedIn.
- **Datos para Google:** esquema JSON-LD de tipo Person en el encabezado.
- **Copiar correo:** en Contacto, junto al correo, hay un botón que lo copia al portapapeles.
- **Animación al bajar:** las secciones y tarjetas aparecen con una transición suave (se desactiva con `prefers-reduced-motion`), y el menú marca la sección visible.

## CV descargable

El botón "Descargar CV" del encabezado y de la sección "Para reclutadores" apunta al CV en Cloudflare R2:

```text
docs/CV HAFID CORONEL.pdf
```

Ese objeto en R2 debe ser la versión corregida de noviembre de 2026 (la que lidera con MELMIR y dice KPI Demo, no GOVA360). Si el archivo en R2 es el CV anterior, reemplázalo en Cloudflare R2 subiendo el PDF corregido con el mismo nombre y en la misma carpeta `docs/`.

## Archivos públicos en Cloudflare R2

La URL pública configurada es:

`https://pub-d04ff4123ba64ab5bf9bb4af219686b0.r2.dev`

El sitio usa estos objetos:

```text
foto/foto.png
docs/Carta Presentación.pdf
```

> El PDF viejo del CV que estaba en R2 (`docs/CV HAFID CORONEL.pdf`) ya no lo usa el sitio. Si quieres, puedes borrarlo o reemplazarlo en Cloudflare R2 por el mismo archivo de `docs/` para no dejar una versión vieja dando vueltas, pero no es necesario para que el botón funcione.

No coloques claves secretas de Cloudflare en el frontend. El frontend solo usa la URL pública `r2.dev`.

## Desarrollo local

Es un sitio estático, sin build. Para verlo localmente basta servir la carpeta, por ejemplo:

```bash
python3 -m http.server 8000
```

y abrir http://localhost:8000/

## Despliegue

Vercel despliega automáticamente desde la rama `main`. La configuración está en `vercel.json`.
