import React from "react";
export default function Card(){
  return(
    <section className="cards-section">
      <div className="card">
        <img src="katie-zaferes.png" alt="katie-zaferes" className="card-img"/>
        <div className="card-stats">
          <img src="star.png" alt="red-star" className="star"/>
          <span>5.0</span>
          <span className="grey">(6) • </span>
          <span className="grey">USA</span> 
          <p>Life lessons with Katie Zaferes</p>
          <p> <span className="bold">From 136$</span> / person</p>
        </div>
      </div>
    </section>
  )
}