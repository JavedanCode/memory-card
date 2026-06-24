import { useState, useEffect } from "react";
import Card from "./Card";

export default function Game() {
  const [deck, setDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function shuffle(cards) {
    setDeck(cards.sort(() => Math.random() - 0.4));
  }

  function reset() {
    setScore(0);
    setClickedCards([]);
  }

  function handleClick(pokemon) {
    const isClicked = clickedCards.includes(pokemon);
    if (isClicked) {
      reset();
    } else {
      setClickedCards([...clickedCards, pokemon]);
      setScore(score + 1);
      shuffle(cards);
      if (score + 1 > bestScore) {
        setBestScore(bestScore + 1);
      }
      if (clickedCards.length + 1 === cards.length) {
        reset();
      }
    }
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
    <div>
      {deck.map((pokemon) => {
        <Card key={pokemon.id} pokemon={pokemon}></Card>;
      })}
    </div>
  );
}
