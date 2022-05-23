import React from 'react'
import "./card.css"
export default function Card({image,status,rating,rating_no,country,description,text}) {
  return (
      <div className="card">
        
      <div className="img_section">
        <img src={image} alt="" />
        <h2> {status}</h2>
      </div>
      <div className="rating_section">
        <img
          src="https://purepng.com/public/uploads/large/red-star-pza.png"
          alt=""
              />
              <h3>{rating}</h3>
              <h4>({rating_no})</h4>
              <h5>.</h5>
              <h6>{country }</h6>
          </div>
          <div className="description">
              <h2>{description }</h2>
          </div>
          <div className="text">
              <h3>{ text}</h3>
          </div>
    </div>
  );
}
