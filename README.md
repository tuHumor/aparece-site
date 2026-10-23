# aparece-site

Landing de **Aparece** (WEBFUTURA SPA): tu empresa aparece en ChatGPT justo
cuando tu cliente va a comprar. Sitio estático hecho con Astro, sin JavaScript
en el cliente.

## Correr en local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/ (estático)
npm run preview   # sirve dist/ para verificar
```

## Antes de lanzar: constantes en `src/config.ts`

Todo lo pendiente vive en un solo archivo:

| Constante          | Valor actual   | Qué poner                                        |
| ------------------ | -------------- | ------------------------------------------------ |
| `SITE.whatsapp`    | `569XXXXXXXX`  | WhatsApp real, formato internacional sin `+`     |
| `SITE.domain`      | `aparece.cl`   | Dominio definitivo cuando esté registrado        |
| `SITE.pixelOn`     | `false`        | `true` cuando exista el Measurement Pixel de OpenAI |

`whatsapp` se reusa en el header, el hero, el piloto, el CTA final, la FAQ y el
botón flotante. El listener de `lead_created` solo se publica cuando
`pixelOn: true` (y hay que pegar el snippet del pixel en
`src/layouts/Layout.astro`, está marcado con un comentario).

## Deploy en Cloudflare Pages

El proyecto **aparece-site** está conectado al repo de GitHub: cada push a
`main` se construye y publica solo en `https://aparece-site.pages.dev`
(presets: build `npm run build`, output `dist`). Los branches distintos de
`main` generan previews en `*.aparece-site.pages.dev`.

- `.nvmrc` fija Node 22: Astro 7 exige ≥22.23.4 y la imagen de build de
  Cloudflare trae una versión más vieja por defecto.
- Nunca agregar `@astrojs/cloudflare`: el sitio es estático puro y no lleva
  adaptador.
- Fallback manual (si algún día hay que publicar sin push):
  `npm run build && npx wrangler pages deploy dist --project-name aparece-site`

### Dominio propio

Cuando `aparece.cl` esté registrado: en el proyecto de Pages →
**Custom domains → Set up a custom domain** → seguir los pasos de DNS que
indica Cloudflare (CNAME o nameservers). El `site` de `astro.config.mjs` ya
apunta a `https://aparece.cl`; no hay que tocar código.

## Repo en GitHub

```bash
git remote add origin git@github.com:tuHumor/aparece-site.git
git push -u origin main
```

## Diseño

Tokens y reglas en `design-system/aparece/MASTER.md`. CTA naranja
`#C2410C` + texto blanco (el naranja más claro no pasa contraste 4.5:1).
Sin frameworks CSS ni JS de animación: transiciones CSS 150–300ms y una
entrada por opacidad que se desactiva con `prefers-reduced-motion`.
