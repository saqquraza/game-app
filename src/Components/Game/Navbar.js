import React from "react";
import "./Navbar.css";

export const Navbar = ({ setShow, size ,show}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_game_list" onClick={() => setShow(true)}>
         Game Event List
        </span>
        <div className="cart" onClick={() => setShow(!show)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};