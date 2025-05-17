import React, { useEffect, useRef } from "react";
import About from "./About";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {StravinciParticle} from "./Particles";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const homeRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // SEO - Update document title and meta description
    document.title = "Stravinci Automotive | Revolutionary Electric Vehicle Technology";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Stravinci Automotive is pioneering the future of electric mobility with cutting-edge technology that delivers unparalleled performance while remaining environmentally responsible.";
    
    // Locomotive Scroll setup
    const scrollContainer = document.querySelector("[data-scroll-container]");

    // Ensuring Locomotive Scroll is available
    if (scrollContainer) {
      ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
          return arguments.length
            ? scrollContainer.scrollTo(value, { duration: 0, disableLerp: true })
            : scrollContainer.scrollTop;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
      });

      ScrollTrigger.addEventListener("refresh", () => scrollContainer.update && scrollContainer.update());
      ScrollTrigger.refresh();
    }

    // Text Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Image Animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    // ScrollTrigger Animations (Sync with Locomotive)
    gsap.utils.toArray(".about-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            scroller: scrollContainer, // Sync with Locomotive Scroll
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.removeEventListener("refresh", () => scrollContainer.update && scrollContainer.update());
    };
  }, []);

  return (
    <>
      <div ref={homeRef} className="text-white  bg-zinc-950 items-center justify-between md:mt-0 mt-[1vh] z-40 relative md:h-screen px-6 md:px-20 py-10 md:py-[8vw]">
       
        <div ref={textRef} className="text-white w-full items-center justify-between">
          <div>

        <StravinciParticle/>
          </div>
        <div className="w-full flex flex-col  justify-between border-t-1 ">
        <h1 className="text-[4vw] md:text-[1.2vw] text-gray-400 w-full mt-2 md:w-[27vw] copperplate-gothic">
              Automotive Engineering the Future of Electric Mobility
            </h1>
            <div className="w-full md:w-[50vw] mt-2 md:mt-5">
              <h2 className="leading-tight copperplate-gothic text-gray-400 text-[3.5vw] md:text-[1vw]">
                We're not just building engines; we're crafting the future of mobility, one breakthrough at a time.
              </h2> 
            </div>
        </div>
         
        </div>
      </div>

    
      <About />
    </>
  );
}

export default Home;
