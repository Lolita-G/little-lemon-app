import RestaurantFood from '../assets/images/restaurantfood.jpg';function Hero() {
    return (
        <section className='hero'>
        <div className="container">
        <div className="hero-text">
         <h1>Little Lemon</h1>
         <h2>Chicago</h2>
         <p>We are a family owned Mediterranean restuarant, focused on traditional recipes served with a modern twist.</p>
         <button className="btn">Reserve Table</button>
        </div> 
         <img 
           src={RestaurantFood} 
           alt='Chef presenting a vibrant Mediterranean dish in a warmly lit restaurant setting, evoking a welcoming and lively atmosphere. Сonveys the fresh and inviting spirit of Little Lemon restaurant. No visible text in the image.' 
         />
         </div>
        </section>      
    );
}

export default Hero;