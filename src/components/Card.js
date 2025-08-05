function Card(props) {
  return (
    <div className="card">
      {/* Временно просто отобразим переданные пропсы */}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.imageSrc && <img src={props.imageSrc} alt={props.title} />}
      {/* Можно добавить и другие, например: rating, review и т.д. */}
    </div>
  );
}

export default Card;
