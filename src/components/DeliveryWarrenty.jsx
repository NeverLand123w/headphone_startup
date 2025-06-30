import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const DeliveryWarranty = () => {
  const iconsRef = useRef()

  useEffect(() => {
    gsap.from(iconsRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: iconsRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10">Delivery & Warranty</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center" ref={iconsRef}>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/1048/1048310.png" class="w-12 mx-auto mb-4" />
          <h3 class="font-semibold text-lg mb-2">Free Shipping</h3>
          <p class="text-gray-600">Delivery across India in 3–5 days.</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" class="w-12 mx-auto mb-4" />
          <h3 class="font-semibold text-lg mb-2">7-Day Return</h3>
          <p class="text-gray-600">No questions asked return policy.</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" class="w-12 mx-auto mb-4" />
          <h3 class="font-semibold text-lg mb-2">1-Year Warranty</h3>
          <p class="text-gray-600">Free replacement for any manufacturing issues.</p>
        </div>
      </div>
    </div>
  )
}

export default DeliveryWarranty
