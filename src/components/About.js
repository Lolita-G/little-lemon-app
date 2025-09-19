import Chefs1 from '../assets/images/Chefs1.jpg';
import Chefs2 from '../assets/images/Chefs2.jpg';

function About() {
  return(
    <section className='about'>
      <div className="container">
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
          </p>
        </div>

        <div className="about-images">
          <img src={Chefs2} alt='Chefs 2'/>
          <img src={Chefs1} alt='Chefs 1'/>
        </div>
      </div>
    </section>
  );
};

export default About;
