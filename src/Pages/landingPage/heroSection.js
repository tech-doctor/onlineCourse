import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero_section'>
      <section>
        {/* <img src='https://res.cloudinary.com/rririsrisurisux/image/upload/v1655009256/Hero_z72vxs.png' alt="hero image"/> */}
        <header>Learning Platform for all African.</header>
        <p>Sometimes when the Oyinbo English too get plenty grammer, na pidgin english sure pass.</p>
        <button><Link style={{color:'white', textDecoration:'none'}} to='/random'>Move Ahead</Link></button>
      </section>
      <div className='overlay'></div>
    </div>
  );
};

export default HeroSection;