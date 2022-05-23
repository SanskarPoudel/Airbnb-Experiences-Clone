import React from 'react'
import "./heroSection.css"
import hero from "./image/heroImage.png"
export default function HeroSection() {
    return (
      
        <div className="heroSection">
          <img src={hero} alt="" />
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
     
    );
}
