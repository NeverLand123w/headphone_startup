import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

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
      className=" bg-gradient-to-b to-[#031C19] from-gray-800 text-white py-16 px-6 text-center -z-10"
      ref={container}
    >
      <h2 className="text-4xl font-bold mb-4 font-['raleway']">Launch Offer: Flat 50% Off</h2>
      <p className="mb-6 text-lg">Grab your Soniquo wireless headphones today. Limited time only!</p>
      <a href="#buy" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition font-['inter']">Buy Now for ₹3,999</a>
    </div>
  )
}

export default OfferBanner