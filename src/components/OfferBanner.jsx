import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import buy from '../assets/images/anc.svg';

gsap.registerPlugin(ScrollTrigger)

const OfferBanner = () => {
  const container = useRef()

  useGSAP(() => {
    gsap.from(container.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    })
  }, { scope: container })

  return (
    <div
      className="w-full mx-auto bg-white text-black py-12 px-6 flex flex-col md:flex-row justify-around items-center gap-10 md:gap-6 text-center md:text-left"
      ref={container}
    >
      <div className="left w-full md:w-1/2 order-2 md:order-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['raleway']">Launch Offer: Flat 50% Off</h2>
        <p className="mb-8 text-lg">Grab your Soniquo wireless headphones today. Limited time only!</p>
        <a href="#buy" className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-200 hover:text-black transition-colors duration-300 font-['inter']">Buy Now for ₹3,999</a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img src={buy} alt="Wireless Headphones Offer" className="w-[15em] max-w-xs md:max-w-sm" />
      </div>
    </div>
  )
}

export default OfferBanner