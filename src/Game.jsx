import { useState, useEffect } from "react";
import Card from "./Card";
import "./game.css";

export default function Game() {
  const [deck, setDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function shuffle(cards) {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);

    setDeck(shuffled);
  }

  function reset() {
    setScore(0);
    setClickedCards([]);
  }

  function handleClick(id) {
    if (clickedCards.includes(id)) {
      reset();
      return;
    }

    const newScore = score + 1;

    setClickedCards([...clickedCards, id]);
    setScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
    }

    if (newScore === deck.length) {
      alert("You win!");
      reset();
      return;
    }

    shuffle(deck);
  }

  function getRandomIds() {
    const ids = new Set();

    while (ids.size < 12) {
      ids.add(Math.floor(Math.random() * 1025) + 1);
    }

    return [...ids];
  }

  useEffect(() => {
    async function fetchPokemon() {
      const ids = getRandomIds();

      const pokemon = await Promise.all(
        ids.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
            res.json(),
          ),
        ),
      );

      setDeck(pokemon);
    }

    fetchPokemon();
  }, []);

  return (
    <div className="game">
      <header className="game-header">
        <h1>Pokémon Memory Game</h1>

        <p>
          Click a Pokémon you haven't clicked before. Clicking the same Pokémon
          twice resets your score.
        </p>

        <div className="scoreboard">
          <h2>Score: {score}</h2>
          <h2>Best Score: {highScore}</h2>
        </div>
      </header>

      <div className="card-grid">
        {deck.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => handleClick(pokemon.id)}
          />
        ))}
      </div>
    </div>
  );
}
