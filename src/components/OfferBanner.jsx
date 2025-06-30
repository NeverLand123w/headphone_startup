import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const OfferBanner = () => {
  const bannerRef = useRef()

  useEffect(() => {
    gsap.from(bannerRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: bannerRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <div
      className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-6 text-center"
      ref={bannerRef}
    >
      <h2 className="text-4xl font-bold mb-4">Launch Offer: Flat 50% Off</h2>
      <p className="mb-6 text-lg">Grab your Soniquo wireless headphones today. Limited time only!</p>
      <a href="#buy" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition">Buy Now for ₹3,999</a>
    </div>
  )
}

export default OfferBanner
