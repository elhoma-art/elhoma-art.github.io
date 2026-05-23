# elhoma.art

Sitio estático de **ELHOMA** — retratos de autor en gran formato pintados al óleo.

Hosting: GitHub Pages. Dominio: [elhoma.art](https://elhoma.art).

## Estructura

```
.
├── index.html         Inicio (hero + galería + manifiesto + paletas + CTA)
├── artista.html       Sobre la artista (bio + curatorial + trayectoria)
├── encargos.html      Cómo encargar (proceso + paletas + formatos)
├── contacto.html      Formulario de encargo (mailto)
├── gracias.html       Confirmación tras enviar
├── 404.html           Página no encontrada
├── CNAME              Dominio personalizado
├── assets/
│   ├── style.css      Sistema visual
│   └── script.js      Nav sticky + form mailto
└── README.md
```

## Estado v1 (pendiente)

- [ ] Sustituir placeholders del hero por fotos profesionales cuando lleguen del fotógrafo.
- [ ] Sustituir 6 placeholders de la galería por imágenes reales de obra.
- [ ] Sustituir placeholder "foto profesional en estudio" de la página de artista.
- [ ] Configurar email `hola@elhoma.art` (registros MX) — por ahora el formulario abre cliente de correo.
- [ ] Considerar Formspree / Web3Forms para procesar el formulario sin pasar por cliente de email del usuario.
- [ ] Decidir bloque "Descarga dossier PDF" (mencionado en brief, no incluido en v1).
- [ ] Versión inglesa (post primer cliente internacional, según brief).

## Editar contenido

Todos los textos están en los `.html` directamente. No hay build, no hay framework — abrir, editar, commit, push.

Brief fuente: `Retratos-Online-Vault/04 - Captacion/Web - estructura y copy.md`.

## Local

Doble-clic en `index.html` o servir con cualquier server estático:

```powershell
# Python
python -m http.server 8080
# o cualquier otro
```

## Deploy

Push a `main` → GitHub Pages reconstruye automáticamente. Cambios visibles en 1-3 minutos.
