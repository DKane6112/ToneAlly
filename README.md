# ToneAlly 🎸 — Your Pocket-Sized Harmony Assistant  
*It’s **ToneAlly** awesome!*

---

## Table of Contents
1. [What is ToneAlly?](#what-is-toneally)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Local Quick Start](#local-quick-start)
5. [Docker Workflows](#docker-workflows)
6. [Project Structure](#project-structure)
7. [API Reference](#api-reference)
8. [Customisation & Roadmap](#customisation--roadmap)

---

## What is ToneAlly?
ToneAlly helps musicians jump-start ideas, learn theory, and jam faster:

* **Chord Progression Generator** – Choose a genre & key, get tried-and-true progressions.
* **Scale Finder** – Type/paste your own chords and instantly see every scale that fits.
* Click any chord → view a diagram (SVG) and (soon) hear it played.

Everything runs in the browser (React) with a lightweight Node + Express API that handles music-theory logic.

---

## Features
| Category | Highlights |
|----------|------------|
| **Generator** | Pop/Rock/Jazz templates (more genres coming soon) |
| **Scale Finder** | Bad-note filter (tritone avoidance) with major & minor patterns. |
| **UI/UX** | • Responsive pill pickers & chip inputs<br>• Dark-mode toggle<br>• Slide-out mobile nav with backdrop. |
| **Accessibility** | ARIA-friendly key & chord selectors, keyboard nav, screen-reader announcements. |
| **Extensible** | Separate theory engine (`utils/`)—easy to add new modes, exotic chords, MIDI export. |

---

## Tech Stack
| Layer | Libraries |
|-------|-----------|
| **Front End** | React 18, React Router 6, Font Awesome, optional Radix UI / shadcn. |
| **Back End** | Node 18, Express 4, nanoid (IDs), Nodemon (dev). |
| **Tooling**  | Create-React-App, dotenv, ESLint + Prettier, Jest (unit tests). |

---

## Local Quick Start

```bash
# 1. Clone & install all dependencies
git clone https://github.com/your-org/toneally.git
cd toneally
npm install            # root: installs both workspaces

# 2. Start API (port 4000)
npm run dev:toneallybe     # runs nodemon src/index.js

# 3. Start React app (port 3000)
npm run dev:toneallyfe    # runs front-end (use second terminal)

# 4. Open http://localhost:3000
```

---

## Docker Workflows
🛠 Development (with hot-reload)
```bash
# Build & launch both services with live-reload
docker compose -f docker-compose.dev.yml up --build
```
Client runs yarn start inside Node, with your source mounted and polling enabled.
Server runs npm run dev (nodemon) inside Node, with automatic reload on changes.


🚀 Production Preview
```bash
# Build & launch multi-stage (CRA → build → nginx) and production server
docker compose up --build
```
Client serves the static /build output via Nginx on port 3000.
Server runs node src/index.js on port 4000.

---

## Project Structure

```
toneally/
│
├── client/                # React front end
│   ├── public/
│   ├── src/
│   │   ├── components/    # UI pieces: ChordChooser, ChordModal, Nav…
│   │   ├── pages/         # Home.jsx, Progressions.jsx, Scales.jsx
│   │   └── App.jsx
│   ├── Dockerfile         # dev Dockerfile (Node)
│   ├── Dockerfile.prod    # production multi-stage (Node → nginx)
│   └── package.json
│
├── server/                # Node / Express API
│   ├── controllers/
│   ├── models/            # progModel.js, scaleModel.js
│   ├── utils/             # chordGenerator.js, progGenerator.js, scaleGenerator.js
│   ├── Dockerfile         # Node Dockerfile (dev & prod)
│   └── package.json
│
├── docker-compose.yml            # production setup
├── docker-compose.dev.yml        # development setup
└── README.md
```

---

## API Reference

| Route    | Method | Body → Properties                | Response                                                         |
| -------- | ------ | -------------------------------- | ---------------------------------------------------------------- |
| `/prog`  | `POST` | `key` (string), `genre` (string) | `{ chords: ["C", "G", …], progression: [steps] }`                |
| `/scale` | `POST` | `chords` (string\[])             | `{ scales: [{ key:"C Major", notes:["C","D",…] }, …] }` |

All responses are JSON. The front end handles formatting & rendering.

---

## Customisation & Roadmap

| ✔️ Done                                          | 🚧 Planned                                       |
| ------------------------------------------------ | ------------------------------------------------ |
| Responsive UI, keyboard navigation, dark mode.   | Audio playback of chords (Web Audio API).        |
| Mixolydian & custom bad-note exceptions.         | MIDI & MusicXML export.                          |
|                                                  | User favourites (localStorage) + shareable URLs. |
|                                                  | PWA install prompt + offline cache.              |
|                                                  | Add new genres                                   | 
