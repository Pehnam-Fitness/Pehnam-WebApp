# Pehnam

A standalone React and Vite preview of Pehnam's private combat-sports coaching
booking experience. It does not connect to a backend, list live coach
availability, or process bookings.

## Run locally

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when
changes are pushed to `main`. In the repository's **Settings → Pages**, set the
build and deployment source to **GitHub Actions**. If your default branch is
not `main`, update the workflow trigger to match it.

The workflow derives Vite's base path from the repository name, so project
pages (for example, `https://<owner>.github.io/<repository>/`) load their
assets correctly. The app uses hash-based routing, which also supports direct
links and refreshes on GitHub Pages.
