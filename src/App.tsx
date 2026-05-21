import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
