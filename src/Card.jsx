export default function Card({ pokemon, onClick }) {
  return (
    <div className="card-wrapper" onClick={() => onClick(pokemon.id)}>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
    </div>
  );
}
