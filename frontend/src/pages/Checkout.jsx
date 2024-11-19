import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../components/ShopContext";
import toast from "react-hot-toast";

const Checkout = () => {
  const { backendUrl } = useContext(ShopContext);
  const [token, setToken] = useState("");

  const [address, setAddress] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const location = useLocation();
  const total = location.state?.total || 0;

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log("Address submitted:", address);
  };

  // if( !email && !phone &&city && !state && !postalCode){
  //   toast.error("All the fields are required")
  // }

  const handleToast = () => {
    toast.error("Please Login To Complete Your Order");
  };

  const handleCheckout = async () => {
    const amount = total;

    if (
      address.name &&
      address.email &&
      address.phone &&
      address.addressLine1 &&
      address.city &&
      address.state &&
      address.postalCode
    ) {
      try {
        const {
          data: { key },
        } = await axios.get(backendUrl + "/api/getkey");

        const response = await axios.post(
          backendUrl + "/api/payment/checkout",
          {
            amount,
          }
        );
        if (response.data.success) {
          const options = {
            key: key,
            amount: response.data.order.amount,
            currency: "INR",
            name: "Tomato Private Limited",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            // order_id: response.order.id,
            callback_url: backendUrl + "/api/payment/paymentVerification",
            prefill: {
              name: address.name,
              email: address.email,
              contact: address.phone,
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        }
      } catch (error) {
        console.error("Error during checkout:", error);
        toast.error(error);
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  const userToken = () => {
    const user = localStorage.getItem("token");
    setToken(user);
  };

  useEffect(() => {
    userToken();
  });

  return (
    <div className="flex justify-between w-[90%] mx-auto my-10">
      {/* Address Form Section */}
      <div className="w-[45%] p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
        <form onSubmit={handleAddressSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              Name
              <span className="text-red-500 pl-[2px]">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={address.name}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              Email
              <span className="text-red-500 pl-[2px]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={address.email}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              Phone
              <span className="text-red-500 pl-[2px]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={address.phone}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              Address Line 1<span className="text-red-500 pl-[2px]">*</span>
            </label>
            <input
              type="text"
              name="addressLine1"
              value={address.addressLine1}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              value={address.addressLine2}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              City
              <span className="text-red-500 pl-[2px]">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              State
              <span className="text-red-500 pl-[2px]">*</span>
            </label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              Postal Code
              <span className="text-red-500 pl-[2px]">*</span>
            </label>
            <input
              type="text"
              name="postalCode"
              value={address.postalCode}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold mt-4"
          >
            Save Address
          </button>
        </form>
      </div>

      {/* pl-[2px] Payment Section */}
      <div className="w-[45%] p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Payment</h2>
        {/* Payment Integration Placeholder */}
        <div className="text-center p-4 border rounded-lg mb-4">
          <p className="text-gray-600">Payment gateway will go here.</p>
          
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p>₹{total - 30}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery:</p>
            <p>₹30</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <p>Total:</p>
            <p>₹{total}</p>
          </div>
        </div>

        <button
          onClick={token ? handleCheckout : handleToast}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md font-semibold mt-4"
        >
          Complete Payment
        </button>

        {/* {token ? (
          <button
            onClick={token ? handleCheckout : handleToast}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md font-semibold mt-4"
          >
            Complete Payment
          </button>
        ) : (
          <button className="w-full bg-zinc-200 text-green-500 py-2 px-4 rounded-md font-semibold mt-4 cursor-not-allowed">
            Please Login To Complete Payment
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Checkout;
