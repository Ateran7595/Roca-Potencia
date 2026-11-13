# Roca y Potencia

React + Vite church website with Spanish/English support across all six existing routes. The redesign preserves the church's original media, schedules, ministries, map/social links, Firebase event management, Firestore newsletter list, and EmailJS notifications.

## Local development

Use Node 20 or newer and the existing npm lockfile:

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run check:i18n
```

On Windows, if the PowerShell npm wrapper drops command flags, use `npm.cmd` or run Vite directly with `node node_modules/vite/bin/vite.js --host 127.0.0.1`.

Create a local ignored `.env` with your existing Firebase and EmailJS client configuration. Never put server credentials or private keys in Vite variables; `VITE_*` values are included in browser bundles.

```dotenv
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_PUBLIC_EMAILJS_SERVICE_ID=
VITE_PUBLIC_EMAILJS_TEMPLATE_ID=
VITE_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Public pages render without configured services; integration-dependent actions show errors until the original services are configured. Firebase rules remain responsible for backend authorization.

### Events or newsletter work in production but fail locally

Vercel environment variables are not automatically available in a local checkout. Restore the same public Firebase and EmailJS client settings in the Git-ignored `.env.local`, then restart `npm run dev` (or rebuild for a local production preview). A missing Firebase API key can produce `auth/invalid-api-key` when the shared Firebase module initializes, preventing both event loading and newsletter queries. Do not change database rules or recreate the Firebase project to fix a missing local configuration.

## Design and bilingual content

See [DESIGN.md](./DESIGN.md) for the audit, reference links, design tokens, component architecture, preservation details, and validation results/limits.

- Global tokens: `src/index.css`; layouts and responsive rules: `src/App.css`.
- Translations: `src/i18n/es.json` and `src/i18n/en.json`. Keep keys and interpolation placeholders aligned; `npm run check:i18n` verifies them.
- `useLanguage()` supplies `t`, locale-aware date formatting, and language state. Spanish is the default; the ES/EN control saves the preference under `roca-language` in localStorage.
- Uploaded event posters and original ministry media remain in their original language. Editors must supply translated poster content/text equivalents; the interface never invents dynamic event details.

No dependencies were added. There is no configured TypeScript or general test suite. The redesign's browser QA report/screenshots are in the ignored `.qa.local/` directory. Live service writes and email delivery were not exercised.

## Original React + Vite template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
