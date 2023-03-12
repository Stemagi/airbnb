import React from "react";
export default function Card(){
  return(
    <section className="cards-section">
      <div className="card">
        <img src="katie-zaferes.png" alt="katie-zaferes" className="card-img"/>
        <p className="rating">
          <img src="star.png" alt="red-star" className="star"/>
          5.0
        </p>
      </div>
    </section>
  )
}