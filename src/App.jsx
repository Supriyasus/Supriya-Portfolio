import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import ScrollSection from './components/ScrollSection.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollSection>
        <About />
      </ScrollSection>
      
    </>
  );
};

export default App;

