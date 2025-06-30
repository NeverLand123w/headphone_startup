import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FAQSection = () => {
    const faqRef = useRef()

    useEffect(() => {
        gsap.from(faqRef.current.querySelectorAll('details'), {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: faqRef.current,
                start: 'top 85%',
            },
        })
    }, [])

    return (
        <div className="bg-gray-100 py-16 px-6 md:px-20" ref={faqRef}>
            <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-6">
                <details class="bg-white p-4 rounded-md shadow-md">
                    <summary class="font-semibold cursor-pointer">Is it compatible with iOS and Android?</summary>
                    <p class="mt-2 text-gray-600">Yes! Soniquo supports Bluetooth 5.2 and works seamlessly with both iOS and Android devices.</p>
                </details>
                <details class="bg-white p-4 rounded-md shadow-md">
                    <summary class="font-semibold cursor-pointer">How long does it take to charge fully?</summary>
                    <p class="mt-2 text-gray-600">It charges to 100% in about 1.5 hours with USB-C fast charging.</p>
                </details>
                <details class="bg-white p-4 rounded-md shadow-md">
                    <summary class="font-semibold cursor-pointer">Can I return the headphones if I don’t like them?</summary>
                    <p class="mt-2 text-gray-600">Yes, you have 7 days to return them with a full refund – no questions asked.</p>
                </details>
            </div>
        </div>
    )
}

export default FAQSection
