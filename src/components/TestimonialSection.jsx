import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';
import { horizontalLoop } from '../utils/horizontalLoop'; 

gsap.registerPlugin(useGSAP, Draggable);

const testimonials = [
    { id: 1, img: "https://i.pravatar.cc/80?img=1", quote: "These headphones changed my daily routine — the ANC is top-notch and comfort is unbeatable!", name: "Aarav M.", title: "Tech Enthusiast" },
    { id: 2, img: "https://i.pravatar.cc/80?img=2", quote: "I was blown away by the sound clarity and battery life. Highly recommended for travelers.", name: "Sneha R.", title: "Frequent Flyer" },
    { id: 3, img: "https://i.pravatar.cc/80?img=3", quote: "Looks premium, feels premium, and the price? Unreal. Soniquo is the future.", name: "Ravi T.", title: "College Student" },
    { id: 4, img: "https://i.pravatar.cc/80?img=4", quote: "The bass is deep and the highs are crisp. Perfect for my music production work.", name: "Priya K.", title: "Music Producer" },
    { id: 5, img: "https://i.pravatar.cc/80?img=5", quote: "An absolute game-changer for my workouts. They stay in place and are sweat-resistant.", name: "Vikram S.", title: "Fitness Junkie" }
];

const TestimonialCard = ({ img, quote, name, title }) => (
    <div className="testimonial-card flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-1/3 p-6 flex gap-10 items-start">
        <img src={img} alt={name} className="w-50 object-cover flex-shrink-0" />
        <div className="testimonial-card-content">
            <p className="text-white italic">“{quote}”</p>
            <div className="mt-4">
                <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-sm text-gray-400">{title}</p>
                </div>
            </div>
        </div>
    </div>
);


const TestimonialSection = () => {
    const containerRef = useRef();
    const wrapperRef = useRef();
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();
    
    useGSAP(() => {
        const cards = gsap.utils.toArray('.testimonial-card', wrapperRef.current);
        
        const loop = horizontalLoop(cards, {
            paused: true,
            draggable: true,
            center: true, 
            paddingRight: 24,
            repeat: -1,
        });

        cards.forEach((card, i) => {
            card.addEventListener("click", () => {
                loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" });
            });
        });

        prevBtnRef.current.addEventListener("click", () => loop.previous({duration: 0.4, ease: "power1.inOut"}));
        nextBtnRef.current.addEventListener("click", () => loop.next({duration: 0.4, ease: "power1.inOut"}));

    }, { scope: containerRef });

    return (
        <div className="bg-gradient-to-b from-[#031C19] to-gray-800 py-16 px-0 md:px-0 z-20 overflow-hidden" ref={containerRef}>
            <h2 className="text-4xl font-bold text-center mb-12 font-['raleway'] px-6 text-white">What Our Customers Say</h2>
            <div 
                className="testimonial-wrapper flex gap-x-6 w-full" 
                ref={wrapperRef}
            >
                {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
            </div>

            <div className="flex justify-center mt-8 gap-4">
                <button ref={prevBtnRef} className="prev-btn p-3 rounded-full bg-gray-700 hover:bg-teal-500 text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button ref={nextBtnRef} className="next-btn p-3 rounded-full bg-gray-700 hover:bg-teal-500 text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default TestimonialSection;