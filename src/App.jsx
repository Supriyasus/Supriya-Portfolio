import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import ScrollSection from './components/ScrollSection.jsx';
import Projects from './sections/Projects.jsx';
import Experiences from './sections/Experiences.jsx';

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
        <div className="max-w-7xl mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-500 dark:text-neutral-500">
            Contact Me
          </h2>
        </div>
      </ScrollSection>
    </>
  );
};

export default App;

