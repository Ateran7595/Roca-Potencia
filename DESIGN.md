# Roca y Potencia frontend design

## Audit and implementation scope

The existing project is a React 18 single-page application using Vite, React Router, Tailwind v4, Radix primitives, and Lucide/react-icons. Firebase provides authentication, Storage event posters, and a Firestore newsletter list. EmailJS sends the administrator-entered event details to subscribers. No existing i18n infrastructure or additional project design documentation was present; the original README contained Vite template notes.

The audit found per-page gradients, absolute image/text offsets, repeated button styles, full-page reload navigation, unlabelled form fields, hidden mobile carousel controls, multiple h1s, unpaused automatic slides/marquees, a global AOS dependency, and no shared footer. There was no separate contact form, telephone number, email address, event database, or dated event listing to preserve or invent.

Implementation order: establish tokens and translations; replace the shared navigation and layout; redesign each existing route; preserve/refine integration flows; validate responsive layouts, language behavior, and media; document maintenance and verification limits.

| Existing route | Page and preserved content                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`            | Welcome message, worship photograph, both congregations, social links                                                                      |
| `/acerca`      | Full vision/mission copy, Mark 9:23, identity photo, three community images                                                                |
| `/bienvenida`  | Welcome message, God's invitation, Joel 2:12–13, original branded image                                                                    |
| `/serviceep`   | Address/map, Sunday/Friday gatherings, Sunday school, children's images, Generacion 316, youth gallery, Instagram/WhatsApp, original video |
| `/servicejz`   | Address/map, Sunday/Thursday gatherings, children's/community images, Youth gallery, Monday Zoom schedule/poster, Instagram/WhatsApp       |
| `/eventos`     | Firebase poster carousel, administrator login/upload/delete, original EmailJS template fields, Firestore newsletter signup                 |

All original public media files remain untouched, including assets not displayed. Existing map and social URLs are retained. The fuller existing congregation-page addresses are used consistently in cards and the footer. The official church name is Roca y Potencia; existing ministry proper names remain unchanged. No new event dates, leaders, or church details were created.

## References and adaptation

Read both supplied GitHub README files and DESIGN.md documents, and the supplied getdesign.md Framer page:

- [Framer reference](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/framer/DESIGN.md): large, tightly tracked headings, restrained weight hierarchy, pill actions, controlled surface contrast, consistent containers and subtle interaction. Adapted for a warm church website rather than reproducing the reference's black marketing canvas, proprietary fonts, or gradient showcases.
- [Airbnb reference](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/airbnb/DESIGN.md): generous photographic cards, clear image/content separation, soft borders and visitor-friendly organization. Used selectively for congregation cards and poster/gallery presentation without copying its branding or layouts.
- [Framer landing/documentation page](https://getdesign.md/framer/design-md), [Framer README](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/framer/README.md), [Airbnb README](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/airbnb/README.md).

No reference was inaccessible. The references are independently curated analyses, not official brand specifications.

## Design tokens and shared components

Tokens live in `src/index.css`; site composition and media queries live in `src/App.css`. Keep the Tailwind import because retained Radix components use utilities. Avoid page-specific gradients and fixed positioning for content.

| Token                         | Value / role                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------- |
| `--canvas`, `--surface`       | `#faf9f6`, `#ffffff`: warm page and card surfaces                            |
| `--ink`, `--muted`            | `#202b29`, `#58635e`: headings/body and secondary text                       |
| `--accent`, `--accent-strong` | `#b9d4c5`, `#315d4b`: softened existing teal family, interactive emphasis    |
| `--border`                    | `#d9ded7`: dividers and card outlines                                        |
| `--error`, `--success`        | `#a6312a`, `#246046`: feedback states                                        |
| `--radius`                    | `16px`: photography, cards, panels; controls use 9px and CTA pills use 999px |
| `--container`                 | `1280px`; larger screens may use 1400px                                      |
| `--section`                   | Responsive `64–112px` section rhythm                                         |

The system font stack avoids remote font requests. Responsive display sizes use `clamp`, body copy has comfortable line heights, and longer English labels wrap rather than truncate. Breakpoints at 480, 800, 1150, and 1600px adapt page grids, cards, gutters, and navigation. Full image content is retained with natural sizing or `object-fit: contain`.

- `Header`: sticky navigation, active route state, accessible mobile disclosure, always-visible ES/EN controls. Escape closes the mobile menu when focus is inside it.
- `MainLayout`: skip link, main landmark, navigation focus/scroll management, localized titles/descriptions, common footer.
- `SiteUI`: `ActionLink`, `PageIntro`, `PhotoCarousel`, `SocialLinks`.
- `PhotoCarousel`: touch scrolling, scroll snap, keyboard arrows and visible previous/next controls at all sizes. Manual movement replaces timed fades/marquees so visitors can read posters and control motion. Images are lazy loaded and never cropped.
- `Congregation`: shared El Paso/Juárez layout with existing location-specific factual data and gallery assets.
- `Newsletter`: labelled form, localized validation, disabled pending action, live feedback, preserved Gmail restriction and Firestore collection/schema.
- `Events` / `LoginForm` / `EventFetcher`: Radix focus-managed dialogs, poster loading/error/empty states, upload progress, file validation, deletion confirmation, retry, sign out, and safe preview URL cleanup.

Reduced-motion CSS disables smooth scrolling and transitions. Primary controls have visible keyboard focus. Image descriptions, menu/dialog labels, status text, and controls follow the selected language. Original video has no supplied caption/transcript file; a localized note makes this limitation explicit. This work does not constitute a full WCAG conformance certification.

`src/lib/useScrollReveal.js` adds one-time fade/rise entrances with soft shadow transitions through a shared IntersectionObserver in MainLayout. Initially visible content stays visible; keyboard focus immediately reveals pending content. A MutationObserver registers asynchronously loaded event galleries. Observers are cleaned up on route changes, and reduced-motion preferences disable the effects, including when changed during a visit. Styling lives in App.css and the `--shadow-soft` token in index.css; no animation dependencies or scroll listeners were added.

Scroll effects were verified in Chrome on all six routes at 390px and 1440px: entrances activate on scrolling, initial headings stay visible, cards have soft shadows, keyboard focus reveals pending links, live reduced-motion changes show all content, and no horizontal overflow or uncaught exceptions occur.

## Localization maintenance

`src/i18n/es.json` and `en.json` contain matching nested keys. `LanguageProvider.jsx` supplies `t(key, values)`, `formatDate(isoDate)`, and language state through `useLanguage()` from `context.js`.

1. Add or update matching keys in **both** dictionaries.
2. Use `t('section.key')` in components; for variables use e.g. `t('common.slide', { current: 1, total: 3 })`.
3. Preserve official church/ministry names and other proper nouns.
4. Use `formatDate('2026-11-12')` for ISO calendar dates; it uses `Intl.DateTimeFormat` and a local noon value to avoid UTC date shifts.
5. Run `npm run check:i18n` to check matching keys, nonempty strings, and placeholder parity.

Spanish is the default. The synchronous initial preference read avoids rendering Spanish content first for a returning English visitor. `localStorage['roca-language']` persists the preference; blocked storage falls back to in-memory state. Switching does not change the route or reload the page. The provider updates `html[lang]`, while the layout updates the document title and description. Missing English strings fall back to Spanish, then to the key. Separate language URLs do not exist, so no misleading hreflang links were added. Existing Vercel SPA rewrites remain unchanged.

Dynamic posters remain in their uploaded language. No structured bilingual event data exists, so the frontend does not fabricate translated titles, dates, locations, or poster text. To make poster contents bilingual and accessible as text, church editors need to provide translations and text equivalents; a filename-based announcement description cannot replace the text embedded in a poster. The original Zoom flyer and video also retain their original language.

## Integrations and verification limits

No new runtime or development dependencies were added. Backend configuration and rules remain unchanged. Firebase is dynamically imported at integration boundaries so missing environment configuration produces feedback without crashing all public pages. Event uploads still use `images/<original filename>`, subscribers still use `{ email }` in `subscribers`, and EmailJS retains its existing template parameters. Notification failures now propagate to the interface, which distinguishes a published poster from mail-delivery failures and avoids encouraging a duplicate upload. Recipient addresses and provider responses are no longer logged by the notification helper.

Verification performed with the existing dependency lockfile:

- `npm ci --no-audit --no-fund`: installed successfully after sandbox cache access failure required an approved rerun.
- `npm run build`: production build passed; sandboxed esbuild access required an approved rerun.
- `npm run lint`: no errors; one existing Fast Refresh warning on the retained `buttonVariants` export.
- `npm run check:i18n`: passed for all 132 keys in both dictionaries, including nonempty values and interpolation placeholders.
- Local headless Chrome: all six routes × ES/EN × 320/390/768/1024/1440px, one h1 per page, no horizontal overflow, named controls, translated metadata, no uncaught browser exceptions.
- Browser interaction checks: default Spanish, live switching, reload and route persistence, mobile menu navigation, local newsletter invalid-email/Gmail validation, Spanish/English form feedback, dialog Escape/focus restoration/Tab containment, mobile dialog bounds, carousel advancement with reduced motion.
- All 43 original image assets and the original video returned HTTP 200. Git reports no changes to `public/`.
- Representative desktop/mobile screenshots inspected; the ignored `.qa.local/` directory contains screenshots, the browser harness, and `report.json` from this session.

No TypeScript/typecheck command or pre-existing automated test command exists. Browser checks did not authenticate, publish/delete live posters, create subscribers, or send mail. No `.env` configuration was supplied in the checkout. Live Firebase authorization/rules, uploads/deletes, newsletter writes/duplicate detection, and EmailJS delivery must be verified with the church's real configuration and a test account. No commit, push, or deployment was performed.

### Subsequent local integration repair

The reported local event/newsletter failures were reproduced as `auth/invalid-api-key`: the checkout had no Firebase environment values, while the existing deployment still worked. Restored the existing public browser configuration from `https://roca-potencia.vercel.app/` into Git-ignored `.env.local`, including the existing EmailJS client settings. No service configuration values were printed or added to tracked files. No backend rules, project, data paths, or application behavior needed changing.

With the local environment restored, browser checks confirmed successful Firebase initialization, the existing event poster loading from Storage, a read from the Firestore subscribers collection, and the actual newsletter form returning the existing-subscriber message. No new subscription, poster change, or email was sent. Creating new subscribers and email delivery were not exercised against production.
