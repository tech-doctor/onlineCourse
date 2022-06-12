import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero_section'>
      <section>
        <header>Learning Platform for all African.</header>
        <p>Sometimes when the Oyinbo English too get plenty grammer, na pidgin english sure pass.</p>
        <button><Link style={{color:'white', textDecoration:'none'}} to='/'>Move Ahead</Link></button>
      </section>
      <div className='overlay'></div>
    </div>
  );
};

export default HeroSection;