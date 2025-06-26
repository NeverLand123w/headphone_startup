import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ancImg from '../assets/images/anc.svg';
import encImg from '../assets/images/enc.svg';
import miccImg from '../assets/images/mic_typec.svg';
import transparencyImg from '../assets/images/transparency.svg';
import earmuffImg from '../assets/images/earmuff.svg';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
    const horizontalRef = useRef(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray(".panel");
        const container = horizontalRef.current;

        const horizontalTween = gsap.to(panels, {
            xPercent: -400,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1.5,
                end: () => `+=${container.offsetWidth * 3.5}`,
            }
        });

        gsap.utils.toArray(".panel").forEach((panel, i) => {
            const image = panel.querySelector('.feature-image');
            const content = panel.querySelector('.feature-content');
            const number = panel.querySelector('.feature-number');
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalTween,
                    start: "left center",
                    toggleActions: "play reverse play reverse",
                }
            });

            tl.from(number, { 
                y: 50, 
                opacity: 0, 
                duration: 0.8, 
                ease: "power2.out" 
            })
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
    }, { scope: horizontalRef });

    return (
        <div className='relative'>
            <div ref={horizontalRef} className="relative h-screen overflow-hidden">
                <div className="h-full flex flex-nowrap w-[500vw]">
                    
                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 relative z-10">
                            <div className="feature-image flex justify-center items-center">
                                <img src={ancImg} alt="Hybrid ANC" className="w-auto h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] object-contain" loading="lazy"/>
                            </div>
                            <div className="feature-content flex flex-col md:text-right relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -left-8 -top-8 text-[120px] md:text-[180px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        01
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight relative z-10">
                                        Hybrid ANC
                                    </h2>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light max-w-md md:max-w-lg ml-auto relative z-10">
                                    Active Noise Cancellation in Bash Pro shuts out noise and unwanted background sound up to 32db, creating a pure, immersive soundscape.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 relative z-10">
                            <div className="feature-image flex justify-center items-center md:order-last">
                                <img src={encImg} alt="Crystal Clear Calls" className="w-auto h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] object-contain" loading="lazy"/>
                            </div>
                            <div className="feature-content flex flex-col md:text-left relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -right-8 -top-8 text-[120px] md:text-[180px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        02
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight relative z-10">
                                        Crystal Clear Calls
                                    </h2>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light max-w-md md:max-w-lg relative z-10">
                                    Equipped with Environmental Noise Cancellation (ENC), our microphones isolate your voice, ensuring you're heard perfectly, even in noisy surroundings.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 relative z-10">
                            <div className="feature-image flex justify-center items-center">
                                <img src={miccImg} alt="High-Fidelity Mic" className="w-auto h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] object-contain" loading="lazy"/>
                            </div>
                            <div className="feature-content flex flex-col md:text-right relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -left-8 -top-8 text-[120px] md:text-[180px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        03
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight relative z-10">
                                        High-Fidelity Mic
                                    </h2>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light max-w-md md:max-w-lg ml-auto relative z-10">
                                    The pro-grade microphone delivers studio-quality voice reproduction for calls, streaming, and recording with pristine clarity.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 relative z-10">
                            <div className="feature-image flex justify-center items-center md:order-last">
                                <img src={transparencyImg} alt="Transparency Mode" className="w-auto h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] object-contain" loading="lazy"/>
                            </div>
                            <div className="feature-content flex flex-col md:text-left relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -right-8 -top-8 text-[120px] md:text-[180px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        04
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight relative z-10">
                                        Transparency Mode
                                    </h2>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light max-w-md md:max-w-lg relative z-10">
                                    Stay aware of your surroundings. A single tap lets ambient sound in, so you can have a conversation or listen for announcements without removing your headphones.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 relative z-10">
                            <div className="feature-image flex justify-center items-center">
                                <img src={earmuffImg} alt="Plush Comfort" className="w-auto h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] object-contain" loading="lazy"/>
                            </div>
                            <div className="feature-content flex flex-col md:text-right relative z-20">
                                <div className="relative">
                                    <div className="feature-number absolute -left-8 -top-8 text-[120px] md:text-[180px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
                                        05
                                    </div>
                                    <h2 className="font-['raleway'] uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight relative z-10">
                                        Plush Comfort
                                    </h2>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light max-w-md md:max-w-lg ml-auto relative z-10">
                                    Engineered for long-listening sessions, the ultra-soft protein leather earmuffs provide a breathable, pressure-free fit for all-day comfort.
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