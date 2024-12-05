import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};