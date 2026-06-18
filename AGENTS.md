# AGENTS.md

## Overview
React 19 + Vite 6 portfolio app, wrapped in Electron 42 for desktop distribution. Tailwind CSS v4 via `@tailwindcss/vite` plugin. No TypeScript. No test framework.

## Key commands
| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Vite production build |
| `npm run electron:dev` | Electron dev (starts Vite, then Electron) |
| `npm run electron:build` | Build Vite + package .exe via electron-builder |
| `npm run lint` | ESLint check |

## Electron packaging quirks
- **electron-builder NSIS fails on plain Windows** (no SeCreateSymbolicLinkPrivilege for winCodeSign extraction). Workaround:
  ```
  $env:CSC_IDENTITY_AUTO_DISCOVERY = "false"
  npx electron-builder --win --config.win.signAndEditExecutable=false
  ```
- If that still fails, use `npx electron-packager . Portfolio --platform=win32 --arch=x64 --out=release --overwrite --electron-version=42.1.0` to get a portable exe.
- Output goes to `release/` (NSIS installer) or `release/Portfolio-win32-x64/` (portable).

## Image / asset paths
- `vite.config.js` sets `base: './'` — required for Electron `file://` protocol.
- **All asset references in JSX must use `./filename` not `/filename`**, because Electron loads `dist/index.html` via `file://` and absolute `/` paths resolve to filesystem root.
- Static files live in `public/` and are imported via string `src="./file.png"`. Do NOT use `/file.png` paths.
- The `dist/` folder mirrors `public/` at root level next to `index.html`.

## Project structure
- `electron/main.js` — Electron main process entrypoint
- `electron/preload.js` — context bridge
- `src/main.jsx` — React entrypoint
- `src/App.jsx` — root component
- `src/pages/` — Home, About, Experience, Projects, Contact
- `src/components/` — Navbar, Footer
