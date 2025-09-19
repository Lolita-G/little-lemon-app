import TestimonialCard from './TestimonialCard';
import Guest1 from '../assets/images/guest1.jpg';
import Guest2 from '../assets/images/guest2.jpg';
import Guest3 from '../assets/images/guest3.jpg';
import Guest4 from '../assets/images/guest4.jpg';

function Testimonials() {
    const testimonials = [
    {rating: 5 ,
      guestName: "Leo",
      imageSrc: Guest1,
      review: "We had such a great time celebrating my grandmothers birthday!"
    },
    {rating: 4,
      guestName: "Gabi",
      imageSrc: Guest2,
      review: "Perfect for events. Delicious food and great service."
    },
    {rating: 5,
      guestName: "Jack",
      imageSrc: Guest3,
      review: "This is the best Mediterranean food that I've ever had!"
    },
    {rating: 5,
      guestName: "Emily",
      imageSrc: Guest4,
      review: "Hidden gem with fantastic Mediterranean dishes!"
    },
  ];
    return(
        <section className='testimonials'>
          <div className="container">
          <h2>What our customers say!</h2>
           <div className="testimonials-cards">
            {testimonials.map(({ rating, guestName, imageSrc, review }) => (
            <TestimonialCard
              key={guestName}
              rating={rating}
              name={guestName}
              imageSrc={imageSrc}
              review={review}
            />
             ))}
          </div>
        </div>
       </section>
    );
};

export default Testimonials;