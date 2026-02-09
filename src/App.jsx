import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import ScrollSection from './components/ScrollSection.jsx';
import Projects from './sections/Projects.jsx';
import Experiences from './sections/Experiences.jsx';
import Achievements from './sections/Achievements.jsx';
import ContactSection from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollSection>
        <About />
      </ScrollSection>
      <ScrollSection>
        <Projects />
      </ScrollSection>
      <ScrollSection>
        <Experiences />
      </ScrollSection>
      <ScrollSection>
        <Achievements />
      </ScrollSection>
      <ScrollSection>
        <ContactSection />
      </ScrollSection>
      
      <ScrollSection>
        <Footer />
      </ScrollSection>
    </>
  );
};

export default App;

