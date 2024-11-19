import React, { useContext, useState } from "react";
import "./Card.css";
// import { toast } from "react-toastify";
import { ShopContext } from "./ShopContext";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { Toaster, toast } from "react-hot-toast";

const Card = ({ id, title, description, image, name, price }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="card h-[18rem] rounded-xl ">
      <img className="card-img" src={image} alt="no image" />
      <div className="card-info">
        <p className="text-title">{title} </p>
        <p className="text-body">{description}</p>
      </div>
      <div className="card-footer  h-10">
        <span className="">₹{price}</span>
        <div className="card-button p-2" onClick={() => addToCart(id)}>
          <IoAddCircleOutline />
        </div>
        <div className="card-button p-2">
          {cartItems[id] ? <p>{cartItems[id]}</p> : <p>0</p>}
        </div>
        <div className="card-button p-2" onClick={() => removeFromCart(id)}>
          <IoRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default Card;
