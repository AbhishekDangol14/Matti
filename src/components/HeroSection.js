import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='video-1.mp4' autoPlay loop muted />
      <h1>WELCOME!</h1>
      <p>WHERE PICTURES BECOMES ALIVE</p>
      
    </div>
  );
}

export default HeroSection;
