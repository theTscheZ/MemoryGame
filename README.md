# MemoryGame

## Team Members:
Aaron Bandion\
Niklas Mikeska\
Rafael Bieringer

## Setup Guide:
For the setup Node.js and npm must be installed.\
Install the project with "git clone https://github.com/theTscheZ/MemoryGame" \
Enter the project with "cd MemoryGame"\
Install dependencies with "npm install"\
Start the devolpment server with "npm run dev"\
Preview the production build with "npm run preview"

## Used Technologies:
- TypeScript
- Vue 3
- Vite
- Pinia
- Vue Router
- TheCatAPI
- Playwright

## Automated Testing:
The project includes automated end-to-end tests using Playwright. You can test them with:\
"npm run build"\
"npx playwright test"

## Usage:
Use the mouse the flip over the cards. Find all the pairs and you may proceed to the next level were you have to find more pairs. The game gets progressively harder. You can change between light and dark mode. You can use the buttons below to change the difficulty at any given time. Your progress is saved in LocalStorage so you can quit and resume whenever you like.
