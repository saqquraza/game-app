import React from "react";

const Cards = ({ item, handleClick }) => {


  const { gameName, locationName, distance, gameEndDate,gameSetUpDate ,gameStartDate ,img} = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{gameName}</p>
        <p>{locationName} | {distance}KM </p>
        {/* <p>{gameSetUpDate}</p>
        <p>{gameStartDate}</p>
        <p>{gameEndDate}</p> */}
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img


