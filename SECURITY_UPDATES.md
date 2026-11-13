# Dependency security update review

Review branch: `fix/dependency-security-updates`. This change is intended for review before merging into `main`.

## Scope

The initial npm audit reported 43 vulnerable packages: 6 critical, 21 high, 12 moderate, and 4 low. These counts aggregate affected packages and their dependency chains; they are not the number of separate GitHub advisories. The repaired dependency graph reports zero known vulnerabilities, including development dependencies, at the time of this update.

The update changes the package manifest and lockfile without changing page code, Firebase configuration, backend rules, church content, routes, or assets. Compatible security updates were applied first without `--force`.

## Packages highlighted by Dependabot

| Package | Previously locked | Resolution |
| --- | --- | --- |
| `protobufjs` | 7.4.0 | Updated to 7.6.6 through the lockfile |
| `node-forge` | 1.3.1 | Removed with unused Firebase Admin dependencies |
| `body-parser` | 1.20.3 | Removed with unused Firebase Functions dependencies |
| `vite` | 6.3.5 | Updated to 6.4.6; declared minimum raised to `^6.4.6` |
| `@fastify/busboy` | 3.1.1 | Removed with unused Firebase Admin dependencies |
| `@grpc/grpc-js` | 1.9.15 / 1.13.2 | Replaced by 1.14.7 using the scoped override described below |

Additional compatible lockfile repairs update affected build, lint, routing, and transitive packages. Direct secure minimums are now `react-router-dom@^7.18.5` and `eslint@^9.39.5` (previously locked to 7.6.0 and 9.23.0 respectively). The application remains on React 18, Firebase 11, Vite 6, and ESLint 9; no framework or Firebase major-version migration is included.

## Unused dependencies removed

Repository-wide import checks found no consumers for `firebase-admin`, `firebase-functions`, `nodemailer`, or `swiper`. They are removed rather than upgraded across major versions solely to retain unused code. Their transitive server libraries account for much of the removed vulnerable dependency tree.

Active integrations remain: the `firebase` browser SDK provides Authentication, Firestore, and Storage; `@emailjs/browser` sends event notifications; the existing manual gallery provides carousels. Neither Nodemailer nor Swiper was used for these features.

## Firestore gRPC override

The retained `@firebase/firestore@4.7.10` package pins `@grpc/grpc-js` to `~1.9.0`. Compatible automatic updates alone cannot resolve all of its advisories. npm suggested forcing a downgrade to Firebase 9, which would introduce unnecessary application migration risk.

The manifest instead scopes an override to Firestore:

```json
"overrides": {
  "@firebase/firestore": {
    "@grpc/grpc-js": "^1.14.7"
  }
}
```

This keeps gRPC within major version 1 while choosing a patched release. Version 1.14.7 supports Node >=12.10, so the project's existing Node >=20 requirement is retained. Because this explicitly replaces Firestore's narrower upstream range, the Node Firestore read path is included in regression validation, in addition to browser checks. Remove the override when a future Firebase upgrade supplies a patched version natively, and rerun the audit and integration checks.

References: [gRPC security advisory](https://github.com/grpc/grpc-node/security/advisories/GHSA-m9gg-hp2v-232j), [gRPC 1.14.7 release](https://github.com/grpc/grpc-node/releases/tag/@grpc%2Fgrpc-js@1.14.7).

## Validation and limits

Validated on November 12, 2026 using Node 22.17.0 and npm 10.9.2:

- `npm ci --no-audit --no-fund`: clean installation from the updated lockfile passed.
- `npm audit`: zero vulnerabilities across all installed dependencies, including development dependencies.
- `npm run build`: production build passed on Vite 6.4.6.
- `npm run lint`: zero errors, with the existing Fast Refresh warning on the retained `buttonVariants` export.
- `npm run check:i18n`: all 132 bilingual keys and interpolation placeholders passed.
- `npm ls`: the retained dependency tree resolves without invalid or missing dependencies; Firestore uses overridden gRPC 1.14.7 and protobufjs 7.6.6.
- Chrome regression checks: all six routes in both languages at 320/390/768/1024/1440px passed (60 combinations), along with navigation, language persistence, local form validation, keyboard/dialog behavior, metadata, all 44 media assets, and no uncaught exceptions.
- Live read-only browser checks: the existing Storage event poster loads; Firestore subscribers are readable; the actual newsletter form detects an existing subscription.
- Node SDK integration check: a Firestore query through the overridden gRPC dependency succeeded, without writing data.
- Scroll-effect regression checks: all six routes at mobile/desktop widths passed (12 combinations), including keyboard focus, shadows, reduced-motion changes, and no overflow or uncaught exceptions.

No test subscriber was added to the live mailing list; event publishing/deletion and EmailJS delivery were not exercised against production. Local `.env.local` and `.qa.local/` files remain ignored and are excluded from this branch's commits. npm also reports that ESLint 9 is no longer supported; a future ESLint major migration should be planned with its plugins, though the installed version has no current npm audit alerts.

The zero-alert audit describes the advisory database at the time of testing, not a guarantee against future vulnerabilities. Run `npm ci` and `npm audit` when reviewing or updating the branch. GitHub's default-branch alerts may remain open until the reviewed fix is merged into `main` and its dependency graph is rescanned.
