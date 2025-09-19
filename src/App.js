import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
     <>
      <Nav/>
      <main>
        <Hero/>
        <Specials/>
        <Testimonials/>
        <About/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
