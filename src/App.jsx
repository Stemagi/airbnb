import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Card from "./card";
import data from "./data";
export default function App(){
  const elementCards = data.map(data =>{
    return <Card  
    coverImg={data.coverImg}
    title={data.title}
    reviewCount={data.reviewCount}
    rating={data.rating}
    price={data.price}
    location={data.location}
    />
  })
  return(
    <div>
      <Navbar />
      <Main />
      <section className="cards-list">{elementCards}</section>
      {/* <Card
      img="katie-zaferes.png"
      alt="katie-zaferes"
      title="Life Lessons with Katie Zaferes"
      rewiewCount="(6)"
      price="136"
      country="Ukraine"
      /> */}
    </div>
  )
}