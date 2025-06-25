import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import anc from '../assets/images/anc.svg';
import enc from '../assets/images/enc.svg';
import micc from '../assets/images/mic_typec.svg';
import transparency from '../assets/images/transparency.svg';
import earmuff from '../assets/images/earmuff.svg';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
    const horizontalRef = useRef(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray(".panel");

        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontalRef.current,
                start: "top", // 👈 Adjust this value
                pin: true,
                scrub: 1,
                end: "+=3500",
            }
        });
    }, { scope: horizontalRef });

    return (
        <div ref={horizontalRef} className='overflow-hidden'>
            <div className="horizontal h-full flex flex-nowrap">
                <section className="panel w-screen h-full flex-shrink-0 flex text-white text-4xl">
                    <div className="anc flex relative space-between w-full pl-10 pr-10">
                        <div className="image w-full">
                            <img src={anc} className='w-[15em]'></img>
                        </div>
                        <div className="content_anc w-full">
                            <h1 className='font-["raleway"] uppercase text-right font-extrabold'>hybrid<br></br>anc</h1>

                        </div>
                    </div>
                </section>
                <section className="panel w-screen h-full flex-shrink-0 flex text-white text-4xl">
                    <div className="enc">
                        <div className="image">
                            <img src={enc}></img>
                        </div>
                        <div className="content_enc">

                        </div>
                    </div>
                </section>
                <section className="panel w-screen h-full flex-shrink-0 flex text-white text-4xl">
                    <div className="micc">
                        <div className="image">
                            <img src={micc}></img>
                        </div>
                        <div className="content_micc">
                        </div>
                    </div>
                </section>
                <section className="panel w-screen h-full flex-shrink-0 flex text-white text-4xl">
                    <div className="transparency">
                        <div className="image">
                            <img src={transparency}></img>
                        </div>
                        <div className="content_transparency">

                        </div>
                    </div>
                </section>
                <section className="panel w-screen h-full flex-shrink-0 flex text-white text-4xl">
                    <div className="earmuff">
                        <div className="image">
                            <img src={earmuff}></img>
                        </div>
                        <div className="content_earmuff">

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Features;