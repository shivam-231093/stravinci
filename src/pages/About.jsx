import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from './Footer';


gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    // SEO - Update meta description for About section
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Learn about Stravinci Automotive's vision for the future of electric mobility. Discover our mission to develop cutting-edge electric engines that deliver unparalleled performance while remaining environmentally responsible.";
    }
    
    const sections = gsap.utils.toArray(".about-section");
    
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.9,
        }
      );
    });
  }, []);

  return (
    <div  className="text-white border-t-2 border-gray-700 leading-tight bg-zinc-950 z-40 relative w-full flex flex-col py-10 items-center">
      
      
      <div className=" text-white w-full flex flex-col md:flex-row mb-[10vw] justify-evenly px-6 md:px-20"> 
        <h1 className="text-[8vw] md:text-[5vw] leading-[1vw] md:mt-9 copperplate-gothic text-center md:text-left">
          About Us
        </h1>
        <div className="text-[2.5vw] text-gray-400 md:text-[1.2vw] w-full md:w-[50vw] py-6 md:py-10 mt-[5vw] copperplate-gothic">
          <h2 className="mt-5">
            Stravinci Automotive was founded with a singular vision—to redefine the future of electric propulsion without compromise. Spearheaded by Founder Kishore Krishnamoorthy and Co-Founder & COO Varun Kannan, our mission is to develop cutting-edge electric engines that deliver unparalleled performance while remaining environmentally responsible.
          </h2>
          <h2 className="mt-5">
            Unlike hybrid or smart hybrid technologies, our focus remains entirely on next-generation electric engineering, ensuring a seamless fusion of power, efficiency, and innovation.
          </h2>
          <h2 className="mt-5">
            We are not just building electric engines; we are engineering the future of mobility—one that is exhilarating, sustainable, and uncompromising.
          </h2>
        </div>
      </div>

    
      <div className=" text-white w-full flex flex-col md:flex-row mb-[10vw] justify-evenly px-6 md:px-20"> 
        <h1 className="text-[8vw]  md:text-[5vw] leading-[10vw] md:leading-[5vw] copperplate-gothic text-center md:text-left">
          Our Vision
        </h1>
        <div className="text-[2.5vw] text-gray-400 md:text-[1.2vw] w-full md:w-[50vw] py-6 md:py-10 mt-[5vw] copperplate-gothic">
          <h2 className="mt-5">
            At Stravinci Automotive, we believe that electric vehicles shouldn't compromise on power, thrill, or emotion. Our mission is to engineer a cutting-edge EV engine that houses a beast within—delivering raw power while being environmentally responsible.
          </h2>
          <h2 className="mt-5">
            We are redefining the EV experience by integrating an innovative exhaust system, allowing you to hear the beast roar while keeping emissions at zero.
          </h2>
        </div>
      </div>

     
      <div className=" text-white w-full flex flex-col md:flex-row mb-[10vw] justify-evenly px-6 md:px-20"> 
        <h1 className="text-[8vw] md:text-[5vw] leading-[10vw] md:leading-[6vw] copperplate-gothic text-center md:text-left">
          Our Technology
        </h1>
        <div className="text-[2.5vw] text-gray-400 md:text-[1.2vw] w-full md:w-[50vw] py-6 md:py-10 mt-[5vw] copperplate-gothic">
          <h2 className="mt-5">
            At Stravinci Automotive, we are redefining electric mobility with groundbreaking engineering. Our EV powertrains are designed to deliver raw performance, efficiency, and an unparalleled driving experience.
          </h2>
          <h2 className="mt-5">
            Unlike conventional EV batteries, our power solutions are distinct, highly efficient, and tailored for the modern world. Our batteries ensure a driving experience that is both powerful and future-ready.
          </h2>
          <h2 className="mt-5">
            At Stravinci, we are not just building electric engines—we are setting new industry standards.
          </h2>
        </div>
      </div>
    
      
    </div>
  );
}

export default About;
