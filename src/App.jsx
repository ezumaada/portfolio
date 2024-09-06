import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Socials from './components/socials/Socials';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App