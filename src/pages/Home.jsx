import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Fishing from '../components/landing/Fishing';
import Cabins from '../components/landing/Cabins';
import Services from '../components/landing/Services';
import Gallery from '../components/landing/Gallery';
import Conditions from '../components/landing/Conditions';
import Location from '../components/landing/Location';
import Reviews from '../components/landing/Reviews';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';
import WhatsAppButton from '../components/landing/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Fishing />
      <Cabins />
      <Services />
      <Gallery />
      <Conditions />
      <Location />
      <Reviews />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
