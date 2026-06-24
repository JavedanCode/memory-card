export default function Card({ pokemon }) {
  return (
    <div className="card-wrapper" onClick={onClick}>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
    </div>
  );
}
