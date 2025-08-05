import Card from './Card';

function Testimonials() {
    const testimonials = [
    {rating: "" ,
      guestName: "",
      imageSrc: "/images/guest1.jpg",
      review: ""
    },
    {rating: "" ,
      guestName: "",
      imageSrc: "/images/guest2.jpg",
      review: ""
    },
    {rating: "" ,
      guestName: "",
      imageSrc: "/images/guest3.jpg",
      review: ""
    },
    {rating: "" ,
      guestName: "",
      imageSrc: "/images/guest4.jpg",
      review: ""
    },
  ];
    return(
        <section className='testimonials'>
          <h2>Testimonials</h2>
          {testimonials.map((testimonial)=>(
            <Card
            key={testimonial.guestName}
            rating={testimonial.rating}
            name={testimonial.guestName}
            imageSrc={testimonial.imageSrc}
            review={testimonial.review}
          />
        ))}
        </section>
    );
};

export default Testimonials;