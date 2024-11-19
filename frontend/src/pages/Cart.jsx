import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { food_list } from "../assets/frontend_assets/assets";
import { ShopContext } from "../components/ShopContext";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

// import "react-hot-toast/dist/index.css";

const Cart = () => {
  const { cartItems, backendUrl, addToCart, removeFromCart } =
    useContext(ShopContext);

  const [foodList, setFoodList] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchProducts = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(backendUrl + "/api/food/listfooditems");
      setFoodList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const cartTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = foodList.find((item) => item._id === itemId);
      if (product) {
        total += product.price * cartItems[itemId];
      }
    }
    setTotal(total);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (foodList.length > 0) {
      cartTotal();
    }
  }, [cartItems, foodList]);
  return (
    <>
      <div className=" text-6xl mt-20 ml-20">Products in your cart</div>
      <div className="w-[90%] ml-20 mt-10">
        <table className="w-full text-left mt-4">
          <thead>
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Add</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((data, index) => {
              if (cartItems[data._id] > 0) {
                return (
                  <tr key={index} className="border-t">
                    <td>
                      <img
                        src={data.image}
                        alt={data.name}
                        className="w-16 h-16"
                      />
                    </td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.description}</td>
                    <td>{cartItems[data._id]}</td>
                    <td>{(data.price * cartItems[data._id]).toFixed(2)}</td>
                    <td>
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded"
                        onClick={() => {
                          addToCart(data._id);
                        }}
                      >
                        Add
                      </button>
                    </td>
                    <td>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => {
                          removeFromCart(data._id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex justify-between h-[35rem] items-center py-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="absolute right-24">
              <p className="text-8xl pb-8">Cart Total</p>
              <div className="pb-5">
                <div className="flex justify-between">
                  <p>Subtotal:</p>
                  <p>₹{total}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Delivery:</p>
                  <p>₹30</p>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                  <p>Total:</p>
                  <p>₹{total + 30}</p>
                </div>
              </div>
              <button className="border bg-orange-800 text-2xl text-white px-10 py-4 rounded-xl">
                <Link to="/checkout" state={{ total: total + 30 }}>
                  Proceed To Checkout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
