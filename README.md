# IV Movies

Portfolio site for [ivmovies.be](https://www.ivmovies.be), built with TanStack Start and deployed to Cloudflare Workers.

## Development

```sh
pnpm install
pnpm dev
```

| Command          | What it does                                      |
| ---------------- | ------------------------------------------------- |
| `pnpm dev`       | Dev server running inside the Workers runtime     |
| `pnpm build`     | Production build, prerenders every page           |
| `pnpm preview`   | Serves the production build locally with Wrangler |
| `pnpm deploy`    | Builds and deploys to Cloudflare                  |
| `pnpm lint`      | oxlint                                            |
| `pnpm fmt`       | oxfmt (`pnpm fmt:check` to verify)                |
| `pnpm typecheck` | TypeScript                                        |

## Content

Projects live in `content/projects/*.md`. The file name is the URL slug, the front matter holds `title`, `release_date`, `thumbnail` and `video_link` (Vimeo or YouTube), and the body is the Markdown description. Thumbnails go in `public/images/projects`.

Edit content through [Pages CMS](https://app.pagescms.org), configured by `.pages.yml`. Every save is a commit, and the build fails if a project file is missing a required field.

## Deployment

Cloudflare Workers Builds deploys on every push to `master`, including commits made by Pages CMS. Old URLs (renamed slugs and `/project?id=…`) redirect from `src/legacy-redirects.ts`.
