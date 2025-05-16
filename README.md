# ToneAlly 🎸 — Your Pocket-Sized Harmony Assistant  
*It’s **ToneAlly** awesome!*

---

## Table of Contents
1. [What is ToneAlly?](#what-is-toneally)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Local Quick Start](#local-quick-start)
5. [Project Structure](#project-structure)
6. [API Reference](#api-reference)
7. [Customisation & Roadmap](#customisation--roadmap)

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
# 1. Clone & install all deps
git clone https://github.com/your-org/toneally.git
cd toneally
npm install            # root: installs both workspaces

# 2. Start API (port 4000)
npm run dev:server     # runs nodemon src/server.js

# 3. Start React app (port 3000)
npm run dev:client     # vite dev

# 4. Open http://localhost:3000
```

---

## Project Structure

```
toneally/
│
├── client/                # React front end
│   ├── src/
│   │   ├── components/    # ChordChooser, ChordModal, Nav, etc.
│   │   ├── pages/         # Home.jsx, Progressions.jsx, Scales.jsx
│   │   ├── hooks/
│   │   └── App.jsx
│   └── public/
│
├── server/                # Node / Express API
│   ├── controllers/
│   ├── models/            # progModel.js, scaleModel.js
│   ├── utils/             # chordGenerator.js, progGenerator.js, scaleGenerator.js
│   └── server.js
│
├── docs/                  # screenshots, diagrams
└── package.json           # workspaces: ["client","server"]
```

---

## API Reference

| Route    | Method | Body → Properties                | Response                                                         |
| -------- | ------ | -------------------------------- | ---------------------------------------------------------------- |
| `/prog`  | `POST` | `key` (string), `genre` (string) | `{ chords: ["C", "G", …], progression: [steps] }`                |
| `/scale` | `POST` | `chords` (string\[])             | `{ scales: [{ key:"C", mode:"Ionian", notes:["C","D",…] }, …] }` |

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
