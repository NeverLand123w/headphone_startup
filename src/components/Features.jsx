import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import ancImg from '../assets/images/anc.svg';
import encImg from '../assets/images/enc.svg';
import miccImg from '../assets/images/mic_typec.svg';
import transparencyImg from '../assets/images/transparency.svg';
import earmuffImg from '../assets/images/earmuff.svg';

// Only register plugins in browser environment
if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const Features = () => {
    const mainRef = useRef(null);
    const panelsContainerRef = useRef(null);

    useGSAP(() => {
        // Safety checks
        if (!mainRef.current || !panelsContainerRef.current) return;

        const panels = gsap.utils.toArray(".panel");

        const horizontalTween = gsap.to(panelsContainerRef.current, {
            x: () => -(panelsContainerRef.current.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: mainRef.current,
                pin: true,
                scrub: 1,
                end: () => "+=" + (panelsContainerRef.current.scrollWidth - window.innerWidth),
                invalidateOnRefresh: true,
                markers: process.env.NODE_ENV === 'development' // shows markers in dev only
            }
        });

        panels.forEach((panel, i) => {
            const image = panel.querySelector('.feature-image');
            const content = panel.querySelector('.feature-content');
            const number = panel.querySelector('.feature-number');

            if (!image || !content || !number) return;

            gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalTween,
                    start: "left center",
                    toggleActions: "play reverse play reverse",
                }
            })
                .from(number, { y: 50, opacity: 0, duration: 0.8, ease: "power2.out" })
                .from(image, {
                    x: i % 2 === 0 ? 100 : -100,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                }, "<0.1")
                .from(content, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "<0.2");
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            horizontalTween.kill();
        };

    }, { scope: mainRef, dependencies: [] });

    return (
        <div className='relative'>
            <div ref={mainRef} className="relative h-screen overflow-hidden bg-gradient-to-b from-[#031C19] to-gray-900">
                <div className="panels-container h-full flex flex-nowrap w-[500vw]">
                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
                            <div className="feature-image flex justify-center items-center">
                                <img src={ancImg} alt="Hybrid ANC" className="w-auto h-[280px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-contain transform hover:scale-105 transition-transform duration-500" loading="lazy" />
                            </div>
                            <div className="feature-content flex flex-col md:text-right relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -left-10 -top-10 text-[150px] md:text-[200px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        01
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight relative z-10">
                                        Hybrid <span className="text-blue-400">ANC</span>
                                    </h2>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-md md:max-w-lg md:ml-auto relative z-10 leading-relaxed">
                                    Active Noise Cancellation in Bash Pro shuts out noise and unwanted background sound up to <span className="font-medium text-white">32db</span>, creating a pure, immersive soundscape.
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                            <div className="w-10 h-10 border-2 border-white/30 rounded-full animate-bounce flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </div>
                    </section>

                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
                            <div className="feature-image flex justify-center items-center md:order-last">
                                <img src={encImg} alt="Crystal Clear Calls" className="w-auto h-[220px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-contain transform hover:scale-105 transition-transform duration-500" loading="lazy" />
                            </div>
                            <div className="feature-content flex flex-col md:text-left relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -right-10 -top-10 text-[150px] md:text-[200px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        02
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight relative z-10">
                                        Crystal <span className="text-purple-400">Clear</span> Calls
                                    </h2>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-md md:max-w-lg relative z-10 leading-relaxed">
                                    Equipped with <span className="font-medium text-white">Environmental Noise Cancellation (ENC)</span>, our microphones isolate your voice, ensuring you're heard perfectly, even in noisy surroundings.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
                            <div className="feature-image flex justify-center items-center">
                                <img src={miccImg} alt="High-Fidelity Mic" className="w-auto h-[220px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-contain transform hover:scale-105 transition-transform duration-500" loading="lazy" />
                            </div>
                            <div className="feature-content flex flex-col md:text-right relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -left-10 -top-10 text-[150px] md:text-[200px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        03
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight relative z-10">
                                        High-Fidelity <span className="text-amber-400">Mic</span>
                                    </h2>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-md md:max-w-lg ml-auto relative z-10 leading-relaxed">
                                    The <span className="font-medium text-white">pro-grade microphone</span> delivers studio-quality voice reproduction for calls, streaming, and recording with pristine clarity.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
                            <div className="feature-image flex justify-center items-center md:order-last">
                                <img src={transparencyImg} alt="Transparency Mode" className="w-auto h-[280px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-contain transform hover:scale-105 transition-transform duration-500" loading="lazy" />
                            </div>
                            <div className="feature-content flex flex-col md:text-left relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -right-10 -top-10 text-[150px] md:text-[200px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        04
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight relative z-10">
                                        <span className="text-emerald-400">Transparency</span> Mode
                                    </h2>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-md md:max-w-lg relative z-10 leading-relaxed">
                                    Stay aware of your surroundings. A single tap lets ambient sound in, so you can have a conversation or listen for announcements without removing your headphones.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
                            <div className="feature-image flex justify-center items-center">
                                <img src={earmuffImg} alt="Plush Comfort" className="w-auto h-[280px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-contain transform hover:scale-105 transition-transform duration-500" loading="lazy" />
                            </div>
                            <div className="feature-content flex flex-col md:text-right relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -left-10 -top-10 text-[150px] md:text-[200px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        05
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight relative z-10">
                                        Plush <span className="text-pink-400">Comfort</span>
                                    </h2>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-md md:max-w-lg ml-auto relative z-10 leading-relaxed">
                                    Engineered for long-listening sessions, the <span className="font-medium text-white">ultra-soft protein leather</span> earmuffs provide a breathable, pressure-free fit for all-day comfort.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Features;