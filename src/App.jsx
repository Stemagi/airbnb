import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Card from "./card";
import data from "./data";
export default function App(){
  const elementCards = data.map(item =>{
    return <Card  
    key={item.id}
    {...item}
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