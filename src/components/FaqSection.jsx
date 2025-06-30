import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const FAQSection = () => {
    const container = useRef()

    useGSAP(() => {
        gsap.from('.faq-item', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: container.current,
                start: 'top 85%',
            },
        })
    }, { scope: container })

    return (
        <div className="bg-[#031C19] py-16 px-6 md:px-20" ref={container}>
            <h2 className="text-4xl font-bold text-center mb-10 font-['raleway']">Frequently Asked Questions</h2>
            <div className="w-full mx-auto space-y-6">
                <details className="bg-white p-4 rounded-md shadow-md faq-item">
                    <summary className="font-semibold cursor-pointer font-[raleway] text-black">Is it compatible with iOS and Android?</summary>
                    <p className="mt-2 text-gray-600">Yes! Soniquo supports Bluetooth 5.2 and works seamlessly with both iOS and Android devices.</p>
                </details>
                <details className="bg-white p-4 rounded-md shadow-md faq-item">
                    <summary className="font-semibold cursor-pointer font-[raleway] text-black">How long does it take to charge fully?</summary>
                    <p className="mt-2 text-gray-600">It charges to 100% in about 1.5 hours with USB-C fast charging.</p>
                </details>
                <details className="bg-white p-4 rounded-md shadow-md faq-item">
                    <summary className="font-semibold cursor-pointer font-[raleway] text-black">Can I return the headphones if I don’t like them?</summary>
                    <p className="mt-2 text-gray-600">Yes, you have 7 days to return them with a full refund – no questions asked.</p>
                </details>
            </div>
        </div>
    )
}

export default FAQSection