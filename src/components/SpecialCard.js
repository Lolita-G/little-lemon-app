function SpecialCard({ title, description, imageSrc, price }) {
  return (
    <div className="special-card">
      <img src={imageSrc} alt={title} />
      <h3>
        {title} <span>{price}</span>
      </h3>
      <p>{description}</p>
      <a href="#order" className="special-card-order">
        Order a delivery <i className="fa-solid fa-motorcycle scooter"></i>
      </a>
    </div>
  );
}

export default SpecialCard;

