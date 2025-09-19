import Logo from '../assets/images/Logo.svg';
function Nav () {
    return (
        <nav className='nav'>
        <div className="container">
        <a href="/"><img src={Logo} alt="Logo of Little Lemon website"/></a>
        <ul className="nav-links">
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Menu</a></li>
          <li><a href='/'>Reservations</a></li>
          <li><a href='/'>Order Online</a></li>
          <li><a href='/'>Login</a></li>
        </ul>
        </div>
      </nav>
    );
};

export default Nav;