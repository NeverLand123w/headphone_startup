import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger.min.js';

// Import your images (make sure paths are correct)
import ancImg from '../assets/images/anc.svg';
import encImg from '../assets/images/enc.svg';
import miccImg from '../assets/images/mic_typec.svg';
import transparencyImg from '../assets/images/transparency.svg';
import earmuffImg from '../assets/images/earmuff.svg';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
  const containerRef = useRef();
  const panelsRef = useRef();

  // Panel data configuration
  const panelData = [
    {
      id: 1,
      title: "Hybrid",
      coloredWord: "ANC",
      color: "text-blue-400",
      description: "Active Noise Cancellation shuts out noise and unwanted background sound up to 32db, creating a pure, immersive soundscape.",
      image: ancImg,
      imagePosition: "left"
    },
    {
      id: 2,
      title: "Crystal Clear",
      coloredWord: "Calls",
      color: "text-purple-400",
      description: "Equipped with Environmental Noise Cancellation (ENC), our microphones isolate your voice, ensuring you're heard perfectly.",
      image: encImg,
      imagePosition: "right"
    },
    {
      id: 3,
      title: "High-Fidelity",
      coloredWord: "Mic",
      color: "text-amber-400",
      description: "The pro-grade microphone delivers studio-quality voice reproduction for calls, streaming, and recording with pristine clarity.",
      image: miccImg,
      imagePosition: "left"
    },
    {
      id: 4,
      title: "Transparency",
      coloredWord: "Mode",
      color: "text-emerald-400",
      description: "Stay aware of your surroundings. A single tap lets ambient sound in without removing your headphones.",
      image: transparencyImg,
      imagePosition: "right"
    },
    {
      id: 5,
      title: "Plush",
      coloredWord: "Comfort",
      color: "text-pink-400",
      description: "Engineered for long sessions, the ultra-soft protein leather earmuffs provide a breathable, pressure-free fit.",
      image: earmuffImg,
      imagePosition: "left"
    }
  ];

  useGSAP(() => {
    if (!containerRef.current || !panelsRef.current) {
      console.error("Refs not attached");
      return;
    }

    const panels = gsap.utils.toArray(".panel");
    const panelWidth = window.innerWidth;
    const totalWidth = panelWidth * panels.length;

    // Set initial width of container
    gsap.set(panelsRef.current, {
      width: totalWidth,
      force3D: true // Improves performance
    });

    // Main horizontal scroll animation
    const horizontalScroll = gsap.to(panelsRef.current, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
        markers: process.env.NODE_ENV === 'development' // Show in dev only
      }
    });

    // Panel animations
    panels.forEach((panel, index) => {
      const direction = index % 2 === 0 ? 100 : -100;
      
      gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left center",
          toggleActions: "play none none none"
        }
      })
      .from(panel.querySelector(".feature-number"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .from(panel.querySelector(".feature-image"), {
        x: direction,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "<0.1")
      .from(panel.querySelector(".feature-content"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "<0.2");
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      horizontalScroll.kill();
    };
  }, { scope: containerRef });

  return (
    <div className="relative">
      <div 
        ref={containerRef} 
        className="relative h-screen overflow-hidden bg-gradient-to-b from-[#031C19] to-gray-700"
      >
        <div 
          ref={panelsRef} 
          className="h-full flex flex-nowrap will-change-transform"
        >
          {panelData.map((panel, index) => (
            <Panel 
              key={panel.id}
              number={panel.id}
              title={panel.title}
              coloredWord={panel.coloredWord}
              color={panel.color}
              description={panel.description}
              image={panel.image}
              imagePosition={panel.imagePosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Panel = ({ number, title, coloredWord, color, description, image, imagePosition }) => {
  return (
    <section className="panel w-screen h-full flex-shrink-0 flex items-center justify-center text-white p-8 md:p-16 lg:p-24 relative">
      <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-24 relative z-10 ${imagePosition === 'right' ? 'md:[&>.feature-image]:order-last' : ''}`}>
        <div className="feature-image flex justify-center items-center">
          <img 
            src={image} 
            alt={title} 
            className="w-auto h-[280px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-contain transform hover:scale-105 transition-transform duration-500" 
            loading="lazy" 
          />
        </div>
        <div className={`feature-content flex flex-col ${imagePosition === 'right' ? 'md:text-left' : 'md:text-right'}`}>
          <div className="relative">
            <div className="feature-number absolute -left-10 -top-10 text-[150px] md:text-[200px] font-extralight text-white/5 pointer-events-none select-none z-0 font-['raleway']">
              {number < 10 ? `0${number}` : number}
            </div>
            <h2 className="font-['raleway'] uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight relative z-10">
              {title} <span className={color}>{coloredWord}</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-md md:max-w-lg relative z-10 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
