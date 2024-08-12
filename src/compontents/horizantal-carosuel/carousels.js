
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './carousels.css'; // External stylesheet for styles

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const totalWidth = wrapper.scrollWidth;

    gsap.to(wrapper, {
      x: -totalWidth + window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".demo-gallery",
        start: "top top",
        end: () => `+=${totalWidth}`, // End based on total width of the carousel
        scrub: true, // Smoothly scroll with page
        anticipatePin: 1
      }
    });
  }, []);

  const imageUrls = [
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp"
  ];

  return (
    <div className="demo-wrapper">
      <section className="demo-gallery">
        <ul className="wrapper">
          {imageUrls.map((src, index) => (
            <li key={index}>
              <img
                src={src}
                className="img"
                alt={`Gallery ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Demo;















