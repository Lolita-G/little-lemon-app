import SpecialCard from './SpecialCard';
import GreekSalad from '../assets/images/greek salad.jpg';
import Bruchetta from '../assets/images/bruchetta.svg';
import LemonDessert from '../assets/images/lemon dessert.jpg';

function Specials() {
    const specials= [
  {title: "Greek salad", 
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", 
    imageSrc: GreekSalad,
    price: "$12.99"
  },
  {title: "Bruchetta", 
    description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt, olive oil and mint.", 
    imageSrc: Bruchetta,
    price: "$5.99"
  },
  {title: "Lemon Dessert", 
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", 
    imageSrc: LemonDessert, 
    price: "$5.00"
  },  
  ];
    return(
        <section className='specials' id='specials'>
          <div className="container">
          <div className="specials-header">
            <h2>This week specials!</h2>
            <button className="btn">Online Menu</button>
          </div>
            <div className="specials-cards">
              {specials.map((special)=>(
                <SpecialCard
                  key={special.title}
                  title={special.title}
                  description={special.description}
                  imageSrc={special.imageSrc}
                  price={special.price}
                />
              ))}
            </div>
          </div>
        </section>
    );
};

export default Specials;