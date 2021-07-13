import React from "react";
import "../App.css";

function Cards({ weekDey, imgURL, temp }) {
  return (
    <div className="p1">
      <h1 className="weekDeyName">{weekDey}</h1>
      <img className="img" src={imgURL}></img>
      <h2 className="temp">{temp}</h2>
    </div>
  );
}

export default Cards;
