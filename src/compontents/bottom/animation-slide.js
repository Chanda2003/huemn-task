import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";

gsap.registerPlugin(ScrollTrigger);

function ScrollComponent() {
  useEffect(() => {
    // Register GSAP context to handle clean up
    let ctx = gsap.context(() => {
      // Set initial states for the images
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      // Create a scroll-triggered animation
      gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".gallery",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: ".gallery", // Pin the gallery during the animation
          // markers: true, // Display markers for debugging (remove when done)
        },
      });
    });

    // Clean up on unmount
    return () => ctx.revert();
  }, []);

  return (
    <React.Fragment>
      <Box
        className="gallery"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh", // Set the gallery to fill the viewport height
        }}
      >
        <Box
          className="rightblock"
          sx={{
            width: "50vw",
            height: "40vw",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Center the images
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              "& .photo": {
                position: "absolute",
                width: "100%",
                height: "100%",
                "& img": {
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                },
              },
            }}
          >
            <Box className="photo">
              <img
                src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches.webp"
                alt="img-1"
              />
            </Box>
            <Box className="photo">
              <img style={{width:"60vw", height:"60vw", marginLeft:"-60px", marginTop:"-130px"}}
                src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-1.webp"
                alt="img-2"
              />
            </Box>
            <Box className="photo">
              <img style={{width:"60vw", height:"60vw", marginLeft:"-60px", marginTop:"-130px"}}
                    src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2.webp"
                alt="img-3"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default ScrollComponent;
