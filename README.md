# ToneAlly 🎸 — Your Pocket-Sized Assistant  
*It’s **ToneAlly** awesome!*

---

## Table of Contents
1. [What is ToneAlly?](#what-is-toneally)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Live Demo](#live-demo)
5. [Local Quick Start](#local-quick-start)
6. [Project Structure](#project-structure)
7. [API Reference](#api-reference)
8. [Customisation & Roadmap](#customisation--roadmap)

---

## What is ToneAlly?
ToneAlly is a suite of tools that helps musicians jump-start ideas, learn theory, and jam faster:

* **Chord Progression Generator** – 11 genre templates (pop, jazz, rock, metal… more coming) in any key.
* **Scale Finder** – Type/paste your own chords and instantly see compatable scales.
* **One‑click Playback** – Hear the whole progression or individual chords, complete with on‑screen chord diagrams.

Everything runs in the browser (React) with a lightweight Node + Express API that handles music-theory logic.

---

## Features
| Category | Highlights |
|----------|------------|
| **Generator** | Pop/Rock/Jazz templates (more genres coming soon), playable chord progressions |
| **Scale Finder** | Bad-note filter (tritone avoidance) with major & minor patterns. |
| **UI/UX** | • Responsive pill pickers & chip inputs<br>• Dark-mode toggle<br>• Slide-out mobile nav with backdrop. |
| **Accessibility** | ARIA-friendly key & chord selectors, keyboard nav, screen-reader announcements. |
| **Extensible** | Separate theory engine (`utils/`)—easy to add new modes, exotic chords, MIDI export. |

---

## Tech Stack
| Layer | Libraries & Services |
|-------|-----------|
| **Front End** | React 19, React Router 7, Axios, Pitchy(tuner), Tone.js(playback). |
| **Back End** | Node 20, Express 4, nanoid (IDs), Nodemon (dev). |
| **Tooling**  | Create-React-App, dotenv, ESLint + Prettier, Jest (unit tests), Docker + Compose. |
| **Hosting**  | Vercel (front-end), Render (API) CO/CD via GitHub Actions.|

---

## Live Demo

**Front-end:** https://tone-ally.vercel.app/ <br>
**Back-end:** https://toneally.onrender.com <br>
The production build is hosted on Vercel behind its global edge CDN.  The Node API runs on Render’s free tier and is throttled to 250 ms cold‑start; expect a brief spin‑up delay on first hit.

---

## Local Quick Start

```bash
# clone & spin up dev stack
git clone https://github.com/your‑org/toneally.git
cd toneally
docker compose -f docker-compose.dev.yml up --build
# -> React on :3000, API on :4000
```

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
| Responsive UI, keyboard navigation, dark mode.   | Metronome         |
| Mixolydian & custom bad-note exceptions.         | Ear trainer mini game                          |
| Audio playback of chords                         | Auto-tab |
| Dark mode                                        | Add new genres             |

