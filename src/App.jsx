import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Card from "./card";
import data from "./data";
export default function App(){
  const elementCards = data.map(data =>{
    return <Card  
    key={data.id}
    coverImg={data.coverImg}
    title={data.title}
    reviewCount={data.reviewCount}
    rating={data.rating}
    price={data.price}
    location={data.location}
    openSpots={data.openSpots}
    />
  })
  return(
    <div>
      <Navbar />
      <Main />
      <section className="cards-list">{elementCards}</section>
    </div>
  )
}