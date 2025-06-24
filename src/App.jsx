import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll data-scroll-section className='w-full min-h-screen text-[#fff] font-["electro"] bg-[#031C19] overflow-hidden'>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  )
}

export default App