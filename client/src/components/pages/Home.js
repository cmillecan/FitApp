import React from 'react';
import '../../App.css';
import Cards from '../Demo';
import HeroSection from '../HeroSection';
import About from "../About";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <About />
    </>
  );
}

export default Home;