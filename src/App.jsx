import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparision from './components/ComparisionSection';
import TestimonialSection from './components/TestimonialSection';
import OfferBanner from './components/OfferBanner';
import DeliveryWarranty from './components/DeliveryWarrenty';
import FAQSection from './components/FaqSection';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll data-scroll-section className='w-full min-h-screen text-[#fff] font-["electro"] bg-[#031C19] overflow-hidden'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Comparision></Comparision>
      <TestimonialSection></TestimonialSection>
      <OfferBanner></OfferBanner>
      <DeliveryWarranty></DeliveryWarranty>
      <FAQSection></FAQSection>
    </div>
  )
}

export default App
