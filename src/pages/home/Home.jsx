import React from 'react';
import Resume from '../../components/resume/Resume';
import About from '../../components/about/About';
import Socials from '../../components/socials/Socials';
import Skills from '../../components/skills/Skills';
import Contact from '../../components/contact/Contact';
import Navbar from '../../components/navbar/Navbar';
import Projects from '../../components/projects/Projects';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      {/* Each section has an ID matching the links in the Navbar */}
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="resume">
        <Resume />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <section id="socials">
        <Socials />
      </section>
    </div>
  );
};

export default Home;
