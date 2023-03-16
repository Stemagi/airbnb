import React from "react";
export default function Card(props){
  return(
      <div className="card">
        <img src={props.coverImg} alt={props.alt} className="card-img"/>
        <div className="card-stats">
          <img src="star.png" alt="red-star" className="star"/>
          <span>{props.rating}</span>
          <span className="grey">{props.rewiewCount} • </span>
          <span className="grey">{props.location}</span> 
          <p>{props.title}</p>
          <p> <span className="bold">From ${props.price}</span> / person</p>
        </div>
      </div>
  )
}