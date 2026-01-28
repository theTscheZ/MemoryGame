# MemoryGame

🔗 **Live Demo:** [https://memory-game-rh8e.onrender.com/](https://memory-game-rh8e.onrender.com/)

## Team Members

* Aaron Bandion
* Niklas Mikeska
* Rafael Bieringer

## Setup Guide

To set up the project, make sure **Node.js** and **npm** are installed.

```bash
git clone https://github.com/theTscheZ/MemoryGame
```

```bash
cd MemoryGame
```

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Preview the production build:

```bash
npm run preview
```

## Used Technologies

* TypeScript
* Vue 3
* Vite
* Pinia
* Vue Router
* TheCatAPI
* Playwright

## Automated Testing

The project includes automated end-to-end tests using **Playwright**.

Build the project:

```bash
npm run build
```

Run the tests:

```bash
npx playwright test
```

## Usage

* Use the mouse to flip over the cards.
* Find all matching pairs to proceed to the next level, where more pairs await.
* The game becomes progressively harder.
* Switch between light and dark mode.
* Change the difficulty at any time using the buttons below.
* Your progress is saved in **LocalStorage**, so you can quit and resume whenever you like.
