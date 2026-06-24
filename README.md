# Pokémon Memory Game

A modern React-based memory card game built with the PokéAPI.

The objective is simple: click each Pokémon card only once. After every successful click, the cards are shuffled. Clicking a Pokémon you've already selected resets your score. Try to remember every card and achieve the highest score possible.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or newer recommended)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/javedancode/memory-game.git
```

Navigate into the project directory:

```bash
cd memory-game
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## How to Play

1. Click a Pokémon card to earn a point.
2. After each click, the cards are shuffled.
3. Do not click the same Pokémon twice.
4. Clicking a previously selected Pokémon resets your current score.
5. Try to click every Pokémon exactly once to win.

## API

This project uses the PokéAPI to retrieve Pokémon information and artwork.

https://pokeapi.co/

## License

This project is open source and available under the MIT License.
