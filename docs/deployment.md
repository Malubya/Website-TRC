# Production deployment

The production site is deployed to the existing Cloudflare Worker
`trc-contractors-website` using Cloudflare Workers Builds and the OpenNext
adapter.

## Cloudflare Workers Builds settings

| Setting | Value |
| --- | --- |
| Git repository | `Malubya/Website-TRC` |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run build:cloudflare` |
| Deploy command | `npx wrangler deploy` |
| Non-production deploy command | `npx wrangler versions upload` |

The Worker name in `wrangler.jsonc` must remain
`trc-contractors-website`. Changing it would target a different Worker.

No build-time or runtime environment variables are currently required. Add
future sensitive values through Cloudflare's Build variables and secrets or
Worker Variables and Secrets settings, never through committed files.

## Collaboration workflow

1. Create a short-lived branch from the latest `main`.
2. Make and test changes locally.
3. Push the branch and open a pull request.
4. Review the Cloudflare preview build before merging.
5. Merge the approved pull request into `main`.

A push or merge to `main` triggers the production build. Non-production branch
builds should upload preview versions and must not promote them to production.

## Local verification

```bash
npm ci
npm run build:cloudflare
npx wrangler deploy --dry-run
```
