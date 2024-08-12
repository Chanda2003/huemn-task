import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./scroll-chrome.css"

gsap.registerPlugin(ScrollTrigger);

function Scrollchrome() {
  useEffect(() => {
    // Set up the GSAP animation with ScrollTrigger
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".b", // The element that triggers the animation
        start: "top bottom", // Animation starts when the top of ".b" hits the bottom of the viewport
        end: "bottom top",   // Animation ends when the bottom of ".b" hits the top of the viewport
        scrub: true,         // Smooth scrolling animation
        markers: true,       // Debugging markers (can be removed)
        id: "scrub",
      },
    });

    tl.to(".b", {
      duration: 1,
      x: 400,
      rotation: 360,
    }).to(".b", {
      duration: 2,
      scale: 2,
    });

    // Clean up on unmount
    return () => {
      ScrollTrigger.getById("scrub")?.kill();
    };
  }, []);

  return (
    <>
      <div className="box purple a">a</div>
      <div className="box green b">b</div>
      <div className="line"></div>
    </>
  );
}

export default Scrollchrome;






















