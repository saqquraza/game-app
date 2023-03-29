import React, { useState } from "react";
import CheckOut from "./CheckOut";
import ListOfGame from "./ListOfGame";
import { Navbar } from "./Navbar";

function GameListing() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
   
  };
 console.log(cart)
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <>
      <Navbar setShow={setShow} size={cart.length} show={show}/>
      {show ? (
        <ListOfGame handleClick={handleClick} />
      ) : (
        <CheckOut cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  );
}

export default GameListing;
