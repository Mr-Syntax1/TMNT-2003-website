<h1 align="center">🐢 TMNT 2003 – Shadow Lair</h1>

<p align="center">
  <strong>Modern fan website for Teenage Mutant Ninja Turtles (2003) – built with React, TypeScript & Tailwind CSS</strong>
</p>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/react-18.2.0-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/typescript-5.0.0-3178C6?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/tailwindcss-3.3.0-06B6D4?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

<p align="center">
<img width="1919" height="941" alt="Screenshot 2026-06-13 023402" src="https://github.com/user-attachments/assets/6d620481-6d4b-459c-93b1-80bcc7e4eda2" />
</p>

<br/>

## 🎬 About

**TMNT 2003 – Shadow Lair** is a fully responsive, bilingual (Persian/English) fan website dedicated to the **Teenage Mutant Ninja Turtles 2003 animated series**.  
It brings back the dark, neon-green atmosphere of the turtles’ lair and lets fans explore episodes, characters, and series info in a modern web experience.

This project was built as a portfolio piece to demonstrate advanced React patterns, TypeScript safety, and a polished UI with Tailwind CSS.

---

## ✨ Features

- 🐢 **Hero section** with animated title and call-to-action.
- 📖 **About section** highlighting series features (quality, voice acting, mobile friendly).
- ⚔️ **Character gallery** – four main turtles (Leonardo, Raphael, Donatello, Michelangelo) with animated cards.
- 🎬 **Episodes page**:
  - 📊 Stats cards (10 episodes, ~220 min, ⭐ 8.7 rating).
  - 🔍 **Search episodes** by title (real-time filter).
  - 🎥 **Video modal** – watch embedded Aparat videos without leaving the page.
  - ⏳ **Skeleton loading** while fetching.
  - 💚 **Coming soon** section with progress bar (10/156 episodes).
  - ✨ Staggered fade‑in animation for episode cards.
- 🌐 **Bilingual support** (Persian / English) – instant translation using Context API.
- 🎨 **Fixed dark theme** with animated glowing circles (green, blue, purple) – immersive TMNT vibe.
- 📱 **Fully responsive** – works on mobile, tablet, and desktop.
- 🧭 **Smooth scrolling** + active navigation dots.

---

## 🖼️ Demo

> 🔗 [Live Demo – coming soon](#)  
> *(Deploy on Vercel / Netlify and paste your link here)*

<p align="center">
  <img src="./screenshots/home.png" width="45%" />
  <img src="./screenshots/episodes.png" width="45%" />
</p>

---

## 🛠️ Tech Stack

| Technology       | Purpose                               |
|------------------|---------------------------------------|
| React 18         | UI library                            |
| TypeScript       | Type safety & better DX               |
| Tailwind CSS     | Utility-first styling                 |
| React Router DOM | Client-side routing                   |
| Context API      | Global language state (i18n)          |
| LocalStorage     | Persist user language preference      |
| Vite             | Build tool & dev server               |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mr-Syntax1/TMNT-2003-website.git
   cd TMNT-2003-website
   ```
2. **Install dependencies**
```
npm install
```

3. **Run the development server**
```
npm run dev
```
4.Open your browser
Visit http://localhost:5173


## 📁 Project Structure
```text
src/
├── assets/
│   ├── hero.png
│   ├── intro.mp4
│   └── TMNT logo.jpg
├── components/
│   ├── CharacterCard.tsx
│   ├── EpisodeCard.tsx
│   ├── LanguageToggle.tsx
│   └── scrollToTop.tsx
├── context/
│   └── LanguageContext.tsx
├── data/
│   ├── characters.tsx
│   ├── episodes.ts
│   └── translations.ts
├── font/
├── layout/
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Layout.tsx
├── pages/
│   ├── EpisodesPage.tsx
│   └── HomePage.tsx
├── App.tsx
├── index.css
└── main.tsx
```



## ⭐ Show your support
### Give a ⭐ if this project helped you or you like it!

<p align="center"> <i>Made with 💚 and 🐢 for TMNT fans</i> </p> ```
