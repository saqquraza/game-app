import React, { useState, useEffect } from "react";
import "./CheckOut.css";
import Payment from "./Payment";

const CheckOut = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [show, setShow] = useState(false);
  

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map(
      (item) =>
        (ans +=
          item.distance * 2 > 30
            ? ((item.distance * 2 - 30) * 50 + 1500) * item.amount
            : 1500 * item.amount)
    );
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {show ? (
        <>
         <Payment price={price}/>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.img} alt="" />
                <div>
                  <p>Set up date and time :{item.gameSetUpDate}</p>
                  <p>Event Start date and time :{item.gameStartDate}</p>
                  <p>Event End date and time :{item.gameEndDate}</p>
                  <p>Location :{item.locationName}</p>
                  <p>Total distance :{item.distance * 2}KM</p>
                </div>
              </div>
              <div>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div>
                <span>
                  {item.distance * 2 > 30
                    ? (item.distance * 2 - 30) * 50 + 1500
                    : 1500}
                </span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Total Transport charge</span>
            <span>Rs - {price}</span>
          </div>
          <div onClick={() => setShow(true)} className="payment">
            <span>Go for payment</span>
          </div>
          <div className="btn">
            <button className="enquiry-btn">Enquiry</button>
          </div>
        </>
      )}
    </article>
  );
};

export default CheckOut;
