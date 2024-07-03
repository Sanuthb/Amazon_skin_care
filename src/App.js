import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Slider_products from './components/Slider_products/Slider_products';
import Virtual_card from './components/Virtual_card/Virtual_card';
import Featured_products from './components/Featured_products/Featured_products';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className='container'>
        <Navbar />
        <Hero />
        <Slider_products />
        <Virtual_card />
        <Featured_products />
        <Testimonial />
        <Footer/>
    </div>
  )
}
