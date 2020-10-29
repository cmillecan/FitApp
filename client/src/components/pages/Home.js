import React from 'react';
import '../../App.css';
import Cards from '../Demo';
import HeroSection from '../HeroSection';
import About from "../About";

function Home({user}) {
  return (
    <>
      <HeroSection user={user}/>
      <Cards />
      <About />
    </>
  );
}

export default Home;