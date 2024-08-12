import React from 'react';
import { Carousel } from 'react-bootstrap';
import carouselVideo from "./non-chrome.mp4";

function BottomCarousel() {


  return (
    <>
     <Carousel>
       <Carousel.Item>
       <video playsInline style={{height:"500px", width:"100%"}} autoPlay>
          <source style={{width:"100%"}} src={carouselVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         <Carousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img style={{width:"100%", height:"500px"}} src='https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.webp' alt='data'></img>
         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img style={{width:"100%", height:"500px"}} src='https://www.google.com/chrome/static/images/homepage/fast/update_desktop.webp' alt='data'></img>
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
    </>
  );
}

export default BottomCarousel;



























