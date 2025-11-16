import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Booking from './pages/Booking';
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
     <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Specials />
              <Testimonials />
              <About />
            </main>
          }
        />
        <Route path="/booking" element={<Booking />} />
        <Route path="confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
