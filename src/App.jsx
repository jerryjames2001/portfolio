import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Technologies from './components/Technologies';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}


export default App

