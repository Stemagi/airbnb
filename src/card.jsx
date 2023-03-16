import React from "react";
export default function Card(props){
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "Online"
  } 
  // else {
  // badgeText = props.item.openSpots + " vacant places"
  // }
  return( 
      <div className="card">
        {/* {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>} */}
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={props.item.coverImg} alt={props.alt} className="card-img"/>
        <div className="card-stats">
          <img src="star.png" alt="red-star" className="star"/>
          <span>{props.item.rating}</span>
          <span className="grey">{props.item.rewiewCount} • </span>
          <span className="grey">{props.item.location}</span> 
          <p>{props.item.title}</p>
          <p> <span className="bold">From ${props.item.price}</span> / person</p>
        </div>
      </div>
  )
}