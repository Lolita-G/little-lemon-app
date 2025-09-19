import Star from '../assets/images/star.jpg'; 

function TestimonialCard({ name, imageSrc, review, rating }) {
  return (
    <div className="testimonial-card">
      {rating && (
        <div className="testimonial-card-rating">
          {[...Array(rating)].map((_, i) => (
            <img key={i} src={Star} alt="star" className="star" />
          ))}
        </div>
      )}
      <div className="testimonial-card-header">
        <img src={imageSrc} alt={name} />
        <h3 className="testimonial-card-name">{name}</h3>
      </div>
      <p>{review}</p>
    </div>
  );
}
export default TestimonialCard;

