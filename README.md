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

## Archivos públicos en Cloudflare R2

La URL pública configurada es:

`https://pub-d04ff4123ba64ab5bf9bb4af219686b0.r2.dev`

El sitio usa estos objetos:

```text
foto/foto.png
docs/CV HAFID CORONEL.pdf
docs/Carta Presentación.pdf
```

> Importante: el PDF del CV en R2 debe ser la versión corregida de noviembre de 2026 (la que lidera con MELMIR y dice KPI Demo, no GOVA360). Si el archivo en R2 es el CV anterior, reemplázalo en Cloudflare R2 con el mismo nombre para que el botón "Descargar CV" entregue la versión actual.

No coloques claves secretas de Cloudflare en el frontend. El frontend solo usa la URL pública `r2.dev`.

## Desarrollo local

Es un sitio estático, sin build. Para verlo localmente basta servir la carpeta, por ejemplo:

```bash
python3 -m http.server 8000
```

y abrir http://localhost:8000/

## Despliegue

Vercel despliega automáticamente desde la rama `main`. La configuración está en `vercel.json`.
