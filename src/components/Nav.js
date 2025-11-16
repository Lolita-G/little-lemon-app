import Logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

function Nav () {
    return (
        <nav className='nav'>
        <div className="container">
        <a href="/"><img src={Logo} alt="Logo of Little Lemon website"/></a>
        <ul className="nav-links">
          <li><a href='/'>Home</a></li>
          <li><a href='/#about'>About</a></li>
          <li><a href='/#specials'>Menu</a></li>
          <li><Link to='/booking'>Reservations</Link></li>
          <li><a href='/'>Order Online</a></li>
          <li><a href='/'>Login</a></li>
        </ul>
        </div>
      </nav>
    );
};

export default Nav;