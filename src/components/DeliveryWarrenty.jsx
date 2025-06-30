import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const DeliveryWarranty = () => {
  const container = useRef()

  useGSAP(() => {
    gsap.from('.service-item', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    })
  }, { scope: container })

  return (
    <div className="bg-gradient-to-b from-[#031C19] to-[#031C19]  py-16 z-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10 font-['raleway']">Delivery & Warranty</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center" ref={container}>
        <div className="service-item">
          <img src="https://cdn-icons-png.flaticon.com/128/1048/1048310.png" className="w-12 mx-auto mb-4" alt="Shipping Icon" />
          <h3 className="font-semibold text-lg mb-2 font-['raleway']">Free Shipping</h3>
          <p className="text-gray-200">Delivery across India in 3–5 days.</p>
        </div>
        <div className="service-item">
          <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" className="w-12 mx-auto mb-4" alt="Return Icon" />
          <h3 className="font-semibold text-lg mb-2 font-['raleway']">7-Day Return</h3>
          <p className="text-gray-200">No questions asked return policy.</p>
        </div>
        <div className="service-item">
          <img src="https://cdn-icons-png.flaticon.com/128/2928/2928929.png" className="w-12 mx-auto mb-4" alt="Warranty Icon"/>
          <h3 className="font-semibold text-lg mb-2 font-['raleway']">1-Year Warranty</h3>
          <p className="text-gray-200">Free replacement for any manufacturing issues.</p>
        </div>
      </div>
    </div>
  )
}

export default DeliveryWarranty