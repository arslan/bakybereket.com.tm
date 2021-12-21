import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const MainSectionSlider = () => {
  return (
    <div>
      <Carousel className="carousel slide relative">
        
            <Image className="object-cover"
              src="/projects/mainSliderImg1.jpg" alt="RysgalBank"
              width={745}
              height={524}
              />
            <Image className="object-cover"
              src="/projects/mainSliderImg2.jpg" alt="RysgalBank"
              width={745}
              height={524}
              />
            <Image className="object-cover"
              src="/projects/mainSliderImg3.jpg" alt="RysgalBank"
              width={745}
              height={524}
              />
        
        
                  
      </Carousel>
    </div>
  );
}

export default MainSectionSlider;