import LogoFooter from '../assets/images/LogoFooter.png';

function Footer() {
    return(
        <footer className="footer">
        <div className="container">
        <img src={LogoFooter} alt='Logo'/>
      <div>
        <h3>Little Lemon</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Specials</a></li>
          <li><a href="/">Reservations</a></li>
        </ul>
      </div>
        <div>
        <h3>Contact Information</h3>
        <p>Address: Chicago, Illinois, USA</p>
        <p>Phone: 312-938-7229</p>
        <p>Email: hello@littlelemon.com</p>
      </div>
      <div>
        <h3>Socials</h3>
        <ul>
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Twitter</a></li>
          <li><a href="/">Instagram</a></li>
        </ul>
      </div>
        <p className="footer-bottom">© 2025 Little Lemon. All rights reserved. | Developed by Lolita Gorkavenko</p>
        </div>
      </footer>
    );
};

export default Footer;