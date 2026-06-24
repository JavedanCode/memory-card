export default function Card({ image, name, onClick }) {
  return (
    <div className="card-wrapper" onClick={onClick}>
      <img src={image} />
      <h2>{name}</h2>
    </div>
  );
}
