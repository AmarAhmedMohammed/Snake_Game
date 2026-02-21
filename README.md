<div align="center">

<!-- Header Banner -->
<img src="https://img.shields.io/badge/🐍_3D_Snake_Game-Three.js_Powered-00ff00?style=for-the-badge&labelColor=0a0a0a" alt="3D Snake Game" width="500"/>

<br/>
<br/>

# 🐍 3D Snake Game

<p align="center">
  <em>A fully immersive 3D snake game built with Three.js — featuring real-time 3D rendering, keyboard & touch controls, score tracking, and a sleek neon-green hacker aesthetic</em>
</p>

<br/>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/3D_Rendering-WebGL-00ff00?style=flat-square" alt="WebGL"/>
  <img src="https://img.shields.io/badge/Grid-40x40-0f0?style=flat-square" alt="Grid"/>
  <img src="https://img.shields.io/badge/Controls-Keyboard_+_Touch-0f0?style=flat-square" alt="Controls"/>
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License"/>
</p>

<br/>

<!-- Separator -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

</div>

<br/>

## 📋 Table of Contents

<details open>
<summary><b>Click to expand / collapse</b></summary>

<br/>

| #   | Section                                  |
| --- | ---------------------------------------- |
| 🎯  | [Overview](#-overview)                   |
| 🕹️  | [How to Play](#️-how-to-play)             |
| ✨  | [Features](#-features)                   |
| 🏗️  | [Architecture](#️-architecture)           |
| 🎨  | [Design](#-design)                       |
| 🛠️  | [Tech Stack](#️-tech-stack)               |
| 📁  | [Project Structure](#-project-structure) |
| ⚙️  | [Game Logic](#️-game-logic)               |
| 🚀  | [Getting Started](#-getting-started)     |
| 📱  | [Mobile Controls](#-mobile-controls)     |
| 🤝  | [Contributing](#-contributing)           |
| 📄  | [License](#-license)                     |

</details>

<br/>

---

<br/>

## 🎯 Overview

<table>
<tr>
<td>

**3D Snake Game** is a modern, browser-based remake of the classic snake game — rendered entirely in **3D** using **Three.js** and **WebGL**. Navigate a glowing green snake across a **40×40 grid**, eat red food spheres to grow and score points, and avoid crashing into walls or yourself!

The game features a striking **neon-green hacker aesthetic** on a dark background, with **3D cube segments** for the snake body, **glowing sphere** food items, directional lighting, and anti-aliased rendering. It supports both **keyboard arrow keys** for desktop and **touch swipes + on-screen D-pad buttons** for mobile devices.

Built with **zero dependencies** beyond Three.js — pure vanilla HTML, CSS, and JavaScript.

<br/>

> 🎮 _A classic game reimagined in 3D with modern web technologies — playable on any device with a browser._

</td>
</tr>
</table>

<br/>

## 🕹️ How to Play

<div align="center">

```
                    🐍 3D SNAKE GAME RULES 🐍
   ─────────────────────────────────────────────────

   🎮 Controls:    Arrow keys (desktop) / Swipe (mobile)
   🏆 Goal:        Eat food, grow, survive!
   📊 Scoring:     +100 points per food eaten
   💀 Game Over:   Hit a wall or your own body

   ─────────────────────────────────────────────────

   GAMEPLAY:

   ┌─── 🐍 Move Snake ─────────────────────────────┐
   │                                                 │
   │   ⬆️ ↑ — Move Up                                │
   │   ⬇️ ↓ — Move Down                              │
   │   ⬅️ ← — Move Left                              │
   │   ➡️ → — Move Right                             │
   │                                                 │
   │   ⚠️  Cannot reverse direction (no 180° turns)  │
   │                                                 │
   ├─── 🔴 Eat Food ────────────────────────────────┤
   │   ├── ✅ Snake grows by 1 segment               │
   │   ├── 📊 Score +100                              │
   │   └── 🔴 New food spawns at random location     │
   │                                                 │
   ├─── 💀 Game Over ───────────────────────────────┤
   │   ├── 🧱 Hit a wall (boundary collision)        │
   │   └── 🐍 Hit yourself (self collision)          │
   └─────────────────────────────────────────────────┘
```

</div>

<table>
<tr>
<td align="center" width="33%">

### ⌨️ Desktop

Use **arrow keys** to steer the snake in any direction. You cannot reverse your current direction.

</td>
<td align="center" width="33%">

### 📱 Mobile (Swipe)

**Swipe** in any direction on the screen. Minimum swipe distance: 30px for detection.

</td>
<td align="center" width="33%">

### 🎮 Mobile (D-Pad)

Use the **on-screen arrow buttons** in the bottom-right corner on touch devices.

</td>
</tr>
</table>

<br/>

## ✨ Features

<div align="center">

### 🎮 Gameplay Features

| Feature               | Description                                                           | Status |
| :-------------------- | :-------------------------------------------------------------------- | :----: |
| 🐍 **3D Snake**       | Snake rendered as glowing green `BoxGeometry` cubes (0.9 × 0.9 × 0.9) |   ✅   |
| 🔴 **3D Food**        | Food rendered as red `SphereGeometry` with emissive glow              |   ✅   |
| 📊 **Score System**   | +100 points per food eaten, displayed in real-time HUD                |   ✅   |
| 🧱 **Wall Collision** | Game over when hitting the 40×40 grid boundary                        |   ✅   |
| 🐍 **Self Collision** | Game over when snake head collides with its own body                  |   ✅   |
| ⚡ **Fast Gameplay**  | 120ms step interval for responsive, exciting gameplay                 |   ✅   |
| 🔄 **Direction Lock** | Prevents 180° reverse turns that would cause instant self-collision   |   ✅   |
| 🔁 **Restart**        | Auto-shows name form after game over for quick replay                 |   ✅   |

### 🎨 Visual Features

| Feature                    | Description                                            | Status |
| :------------------------- | :----------------------------------------------------- | :----: |
| 🌐 **3D Rendering**        | Full WebGL rendering via Three.js with anti-aliasing   |   ✅   |
| 📷 **Orthographic Camera** | Top-down 2.5D view with adjustable `viewSize`          |   ✅   |
| 💡 **Dual Lighting**       | Ambient light + directional light for 3D depth         |   ✅   |
| 🖼️ **Background Image**    | Custom background texture with fallback solid color    |   ✅   |
| 🟢 **Neon Aesthetic**      | Green wireframe border, glowing text, hacker theme     |   ✅   |
| ✨ **Emissive Materials**  | `MeshPhongMaterial` with emissive glow on snake & food |   ✅   |
| 🖼️ **Grid Wireframe**      | Green wireframe `BoxGeometry` board boundary           |   ✅   |

### 📱 Input & Responsive Features

| Feature                  | Description                                                | Status |
| :----------------------- | :--------------------------------------------------------- | :----: |
| ⌨️ **Keyboard Controls** | Arrow keys (←↑→↓) with `keyCode` handling                  |   ✅   |
| 👆 **Touch Swipe**       | Swipe gesture detection (30px min distance)                |   ✅   |
| 🎮 **On-Screen D-Pad**   | Mobile control buttons (↑←↓→) bottom-right corner          |   ✅   |
| 📱 **Responsive UI**     | Adapts to mobile screens (≤768px breakpoint)               |   ✅   |
| 🪟 **Window Resize**     | Camera and renderer dynamically resize with window         |   ✅   |
| 🔒 **No Text Selection** | Prevents accidental text selection on mobile               |   ✅   |
| 👤 **Player Name Form**  | Optional name input before starting (defaults to "Player") |   ✅   |
| 📤 **Score Submission**  | Hidden form submits score to PHP backend via iframe        |   ✅   |

</div>

<br/>

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                     🌐 Browser (WebGL)                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    Three.js Scene                           │ │
│  │                                                             │ │
│  │  ┌──────────┐  ┌──────────────┐  ┌──────────────────────┐  │ │
│  │  │ Camera   │  │ Ambient      │  │ Directional          │  │ │
│  │  │Ortho-    │  │ Light        │  │ Light                │  │ │
│  │  │graphic   │  │ (0x404040)   │  │ (0xFFFFFF)           │  │ │
│  │  └──────────┘  └──────────────┘  └──────────────────────┘  │ │
│  │                                                             │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────────────┐  │ │
│  │  │ 🐍 Snake │  │ 🔴 Food  │  │ 🟢 Board Wireframe     │  │ │
│  │  │ BoxGeo   │  │ SphereGeo│  │ 40×40 Grid Boundary    │  │ │
│  │  │ (Green)  │  │ (Red)    │  │ (Green wireframe)      │  │ │
│  │  └──────────┘  └──────────┘  └──────────────────────────┘  │ │
│  └─────────────────────────────────────────────────────────────┘ │
│        │                                                        │
│  ┌─────▼─────────────────────────────────────────────────────┐  │
│  │                    Game Engine (Vanilla JS)                │  │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────────────────┐ │  │
│  │  │ Game Loop  │ │ Collision  │ │ Input Handler          │ │  │
│  │  │ (120ms)    │ │ Detection  │ │ (Keys/Touch/D-Pad)     │ │  │
│  │  └────────────┘ └────────────┘ └────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────────┘  │
│        │                                                        │
│  ┌─────▼─────────────────────────────────────────────────────┐  │
│  │                    UI Overlay (HTML/CSS)                   │  │
│  │  ┌──────────┐ ┌──────────┐ ┌────────────┐ ┌───────────┐  │  │
│  │  │ Name     │ │ Score    │ │ Mobile     │ │ Hidden    │  │  │
│  │  │ Form     │ │ HUD      │ │ D-Pad      │ │ Score     │  │  │
│  │  │          │ │          │ │ Controls   │ │ Form      │  │  │
│  │  └──────────┘ └──────────┘ └────────────┘ └───────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

<br/>

## 🎨 Design

<div align="center">

### 🎨 Color Palette

<table>
<tr>
<td align="center" width="130">
<img src="https://via.placeholder.com/60x60/0a0a0a/00ff00?text=🐍" alt="Black"/>
<br/><b>#0a0a0a</b>
<br/><sub>Scene BG</sub>
</td>
<td align="center" width="130">
<img src="https://via.placeholder.com/60x60/00ff00/000000?text=🐍" alt="Green"/>
<br/><b>#00ff00</b>
<br/><sub>Snake & Neon</sub>
</td>
<td align="center" width="130">
<img src="https://via.placeholder.com/60x60/003300/00ff00?text=✨" alt="Dark Green"/>
<br/><b>#003300</b>
<br/><sub>Snake Emissive</sub>
</td>
<td align="center" width="130">
<img src="https://via.placeholder.com/60x60/ff0000/FFFFFF?text=🔴" alt="Red"/>
<br/><b>#ff0000</b>
<br/><sub>Food</sub>
</td>
<td align="center" width="130">
<img src="https://via.placeholder.com/60x60/550000/ff0000?text=✨" alt="Dark Red"/>
<br/><b>#550000</b>
<br/><sub>Food Emissive</sub>
</td>
</tr>
</table>

### 🐍 3D Objects

| Object               | Geometry         | Material            | Color                            | Size                    |
| :------------------- | :--------------- | :------------------ | :------------------------------- | :---------------------- |
| 🐍 **Snake Segment** | `BoxGeometry`    | `MeshPhongMaterial` | `0x00ff00` + emissive `0x003300` | 0.9 × 0.9 × 0.9         |
| 🔴 **Food**          | `SphereGeometry` | `MeshPhongMaterial` | `0xff0000` + emissive `0x550000` | radius 0.5, 32 segments |
| 🟢 **Board**         | `BoxGeometry`    | `MeshBasicMaterial` | `0x00ff00` wireframe             | 41 × 41 × 1             |

### 💡 Lighting Setup

| Light              | Type               | Color                     | Position      |
| :----------------- | :----------------- | :------------------------ | :------------ |
| 🌫️ **Ambient**     | `AmbientLight`     | `0x404040` (soft white)   | Global        |
| ☀️ **Directional** | `DirectionalLight` | `0xffffff` (intensity: 1) | `(0, 10, 10)` |

### 🅰️ Typography

| Font                        | Usage                                   |
| :-------------------------- | :-------------------------------------- |
| **Courier New** (monospace) | All UI text — hacker terminal aesthetic |

</div>

<br/>

## 🛠️ Tech Stack

<div align="center">

<table>
<tr>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="48" height="48" alt="HTML5" />
<br /><b>HTML5</b>
<br /><sub>Structure & UI Overlay</sub>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="48" height="48" alt="CSS3" />
<br /><b>CSS3</b>
<br /><sub>Neon Styling & Mobile</sub>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
<br /><b>JavaScript ES6+</b>
<br /><sub>Game Engine & Logic</sub>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" width="48" height="48" alt="Three.js" />
<br /><b>Three.js</b>
<br /><sub>3D WebGL Rendering</sub>
</td>
</tr>
</table>

### 📦 Libraries

| Library           | File                 | Size   | Purpose                                                   |
| :---------------- | :------------------- | :----- | :-------------------------------------------------------- |
| **Three.js**      | `js/three.min.js`    | 603 KB | 3D scene, camera, renderer, geometry, materials, lighting |
| **jQuery**        | `js/jquery-3-4-1.js` | 88 KB  | Available for DOM manipulation (optional)                 |
| **Bootstrap CSS** | `css/bootstrap.css`  | 207 KB | Base styles (optional grid/utilities)                     |

</div>

<br/>

## 📁 Project Structure

```
Snake_Game/
│
├── 📄 index.html              # Game HTML — player form, HUD, 3D container,
│                               #   mobile controls, hidden score submission form
├── 📄 README.md                # This file
│
├── 📁 css/                     # Stylesheets
│   ├── 🎨 styles.css           # Neon theme, mobile controls, responsive design
│   └── 🎨 bootstrap.css        # Bootstrap base styles
│
├── 📁 js/                      # Scripts
│   ├── 🎮 scripts.js           # Core game logic (321 lines)
│   │                           #   ├── init() — scene, camera, renderer, lights
│   │                           #   ├── startGame() — reset & begin game loop
│   │                           #   ├── gameLoop() — move, collide, eat, grow
│   │                           #   ├── createSnakePart() — 3D cube segments
│   │                           #   ├── spawnFood() — random red sphere
│   │                           #   ├── gameOver() — alert, submit, reset
│   │                           #   ├── onKeyDown() — keyboard input
│   │                           #   ├── handleTouchStart/End() — swipe gestures
│   │                           #   └── animate() — requestAnimationFrame loop
│   ├── 🌐 three.min.js         # Three.js 3D library (minified)
│   └── 📦 jquery-3-4-1.js      # jQuery library
│
└── 📁 img/                     # Assets
    └── 🖼️ background.jpg       # 3D scene background texture (1.5 MB)
```

<br/>

## ⚙️ Game Logic

<div align="center">

### 🔢 Constants

```javascript
const gridSize = 20; // Grid unit size
const boardSize = 40; // 40×40 playable grid
const stepTime = 120; // ms per game tick (speed)
```

### 📦 State Variables

```javascript
let scene, camera, renderer; // Three.js core objects
let snake = []; // Array of { x, y, mesh } segments
let food; // { x, y, mesh } food object
let score = 0; // Current score (+100 per food)
let playerName = ""; // Player's display name
let direction = "right"; // Current movement direction
let nextDirection = "right"; // Queued next direction (prevents reversals)
let gameInterval; // setInterval ID for game loop
let gameRunning = false; // Game active flag
```

### 🧩 Core Functions

| Function                | Purpose                                                                                                                                          |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `init()`                | Create Three.js scene, camera (orthographic), renderer, lights, board wireframe, load background texture, bind all event listeners               |
| `startGame()`           | Reset scores/direction, clear old meshes, create snake head at `(0,0)`, spawn first food, start `setInterval` game loop                          |
| `gameLoop()`            | Execute direction, compute new head position, check wall & self collisions → `gameOver()`, check food collision → grow + score, else remove tail |
| `createSnakePart(x, y)` | Create green `BoxGeometry` cube mesh at position, add to scene & snake array                                                                     |
| `spawnFood()`           | Generate random position not overlapping snake, create red `SphereGeometry` mesh                                                                 |
| `switchPlayer()`        | _(Not used in snake — leftover from pig game template)_                                                                                          |
| `gameOver()`            | Stop game, alert score, submit via hidden form to PHP, show name form                                                                            |
| `onKeyDown(event)`      | Map arrow keyCodes (37–40) to direction changes with reversal prevention                                                                         |
| `changeDirection(dir)`  | Set `nextDirection` with reversal check (used by mobile controls)                                                                                |
| `handleTouchStart/End`  | Detect swipe direction from touch delta (min 30px)                                                                                               |
| `onWindowResize()`      | Update orthographic camera aspect ratio & renderer size                                                                                          |
| `animate()`             | `requestAnimationFrame` render loop                                                                                                              |

### 🔄 Game Loop Flowchart

```
  ┌──────────────────────────────────────────────┐
  │        🎮 init() — Build 3D Scene            │
  │   scene + camera + renderer + lights + board  │
  └──────────────────┬───────────────────────────┘
                     │
                     ▼
  ┌──────────────────────────────────────────────┐
  │       ▶️ startGame() — Reset & Begin          │
  │   snake = [head at (0,0)]                     │
  │   food = spawnFood()                          │
  │   setInterval(gameLoop, 120ms)                │
  └──────────────────┬───────────────────────────┘
                     │
                     ▼
  ┌──────────────────────────────────────────────┐
  │        🔄 gameLoop() — Every 120ms           │
  │   direction = nextDirection                   │
  │   Compute (newX, newY) based on direction     │
  └──────────────────┬───────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
   Hit Wall?    Hit Self?    Neither
        │            │            │
        ▼            ▼            ▼
  ┌──────────┐ ┌──────────┐ ┌────────────────┐
  │ 💀 Game  │ │ 💀 Game  │ │ Add new head   │
  │   Over   │ │   Over   │ │ mesh to scene  │
  └──────────┘ └──────────┘ └───────┬────────┘
                                    │
                           ┌────────┴────────┐
                           │                 │
                      Ate Food?         No Food
                           │                 │
                           ▼                 ▼
                    ┌────────────┐   ┌──────────────┐
                    │ ✅ score   │   │ Remove tail  │
                    │   += 100   │   │ mesh & array │
                    │ spawnFood()│   │ (constant    │
                    │ (grow!)    │   │  length)     │
                    └────────────┘   └──────────────┘
```

</div>

<br/>

## 🚀 Getting Started

### 📋 Prerequisites

<table>
<tr>
<td>

| Requirement                 | Version                                                    |
| :-------------------------- | :--------------------------------------------------------- |
| **Web Browser**             | Chrome, Firefox, Safari, or Edge with WebGL support        |
| **Web Server** _(optional)_ | Any local server (for background texture loading via CORS) |

> 💡 The game works by opening `index.html` directly, but the background image requires a local server due to CORS restrictions on `file://`.

</td>
</tr>
</table>

### ▶️ Quick Start

<details open>
<summary><b>Step-by-step guide</b></summary>

<br/>

**1️⃣ Clone the repository**

```bash
git clone https://github.com/AmarAhmedMohammed/Snake_Game.git
cd Snake_Game
```

**2️⃣ Open the game**

```bash
# Option A: Direct open (background may not load)
start index.html           # Windows
open index.html            # macOS
xdg-open index.html        # Linux

# Option B: Local server (recommended for full experience)
# Python 3:
python -m http.server 8000
# Then open http://localhost:8000

# Node.js:
npx serve .
# Then open http://localhost:3000
```

**3️⃣ Play! 🐍**

- Enter your name (or skip — defaults to "Player")
- Use **arrow keys** or **swipe** to control the snake
- Eat **red food** to score +100 and grow
- Avoid **walls** and **yourself**!

</details>

<br/>

## 📱 Mobile Controls

<div align="center">

The game supports **three input methods** simultaneously:

<table>
<tr>
<td align="center" width="33%">

### ⌨️ Keyboard

```
       ↑
     ← ↓ →
```

Arrow keys for desktop players

</td>
<td align="center" width="33%">

### 👆 Touch Swipe

```
    👆 Swipe Up
👈 Left  Right 👉
   👇 Swipe Down
```

Swipe anywhere on screen (min 30px)

</td>
<td align="center" width="33%">

### 🎮 D-Pad Buttons

```
      [↑]
   [←][↓][→]
```

On-screen buttons (touch devices only)

</td>
</tr>
</table>

> 📱 Mobile D-Pad buttons auto-appear on touch devices or screens ≤768px wide via CSS `@media (hover: none) and (pointer: coarse)`.

</div>

<br/>

## 🤝 Contributing

<table>
<tr>
<td>

Contributions are always welcome! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔃 **Open** a Pull Request

### 💡 Contribution Ideas

- 🔊 Add sound effects (eating, game over, movement)
- 🏆 Add high score leaderboard with persistent storage
- 🎯 Add difficulty levels (speed increases over time)
- 🌈 Add snake color progression as it grows
- 🍎 Add different food types with bonus points
- 🧱 Add obstacles/walls inside the grid
- 💥 Add particle effects on food collection
- 🎵 Add background music with toggle

</td>
</tr>
</table>

<br/>

## 📄 License

<div align="center">

This project is licensed under the **MIT License**.

<br/>

```
MIT License — feel free to use this project for learning and development.
```

<br/>

---

<br/>

<p align="center">
  <b>⭐ If you found this project helpful, please give it a star!</b>
</p>

<p align="center">
  Made with ❤️ and 🐍
</p>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/🐍_Slither._Eat._Grow._Survive!-00ff00?style=for-the-badge&labelColor=0a0a0a" alt="Play Now!"/>
</p>

</div>
