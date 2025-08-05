import Card from './Card';

function Specials() {
    const specials= [
  {title: "Greek salad", 
    description: "", 
    imageSrc: "/images/greek salad.jpg"
  },
  {title: "Bruchetta", 
    description: "", 
    imageSrc: "/images/bruchetta.svg"
  },
  {title: "Lemon Dessert", 
    description: "", 
    imageSrc: "/images/lemon dessert.jpg"
  },  
  ];
    return(
        <section className='specials'>
          <h2>Specials</h2>
          <button>Online Menu</button>
          {specials.map((special)=>(
            <Card
             key={special.title}
            title={special.title}
            description={special.description}
            imageSrc={special.imageSrc}
            />
          ))}
        </section>
    );
};

export default Specials;