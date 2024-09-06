import React from 'react';
import Resume from '../../components/resume/Resume';
import About from '../../components/about/About';
import Socials from '../../components/socials/Socials';
import Skills from '../../components/skills/Skills';
import Contact from '../../components/contact/Contact';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <About/>
      
      <Skills/>
      <Resume/>
      <Contact/>
      <Socials/>
    </div>
  )
}

export default Home