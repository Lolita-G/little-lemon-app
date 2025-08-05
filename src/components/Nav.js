function Nav () {
    return (
        <nav className='nav'>
        <img src='logo.svg' alt='Logo of Little Lemon website'/>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Menu</a></li>
          <li><a href='/'>Reservations</a></li>
          <li><a href='/'>Order Online</a></li>
          <li><a href='/'>Login</a></li>
        </ul>
      </nav>
    );
};

export default Nav;