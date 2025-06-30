import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const TestimonialSection = () => {
    const sectionRef = useRef()

    useEffect(() => {
        gsap.from(sectionRef.current.querySelectorAll('div > div'), {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
        })
    }, [])

    return (
        <div className="bg-gray-100 py-16 px-6 md:px-20" ref={sectionRef}>
            <h2 className="text-4xl font-bold text-center mb-10">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <p class="text-gray-700 italic">“These headphones changed my daily routine — the ANC is top-notch and comfort is unbeatable!”</p>
                    <div class="mt-4 flex items-center gap-4">
                        <img src="https://i.pravatar.cc/40" alt="User" class="rounded-full w-10 h-10" />
                        <div>
                            <p class="font-semibold">Aarav M.</p>
                            <p class="text-sm text-gray-500">Tech Enthusiast</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <p class="text-gray-700 italic">“I was blown away by the sound clarity and battery life. Highly recommended for travelers.”</p>
                    <div class="mt-4 flex items-center gap-4">
                        <img src="https://i.pravatar.cc/41" alt="User" class="rounded-full w-10 h-10" />
                        <div>
                            <p class="font-semibold">Sneha R.</p>
                            <p class="text-sm text-gray-500">Frequent Flyer</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <p class="text-gray-700 italic">“Looks premium, feels premium, and the price? Unreal. Soniquo is the future.”</p>
                    <div class="mt-4 flex items-center gap-4">
                        <img src="https://i.pravatar.cc/42" alt="User" class="rounded-full w-10 h-10" />
                        <div>
                            <p class="font-semibold">Ravi T.</p>
                            <p class="text-sm text-gray-500">College Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection
