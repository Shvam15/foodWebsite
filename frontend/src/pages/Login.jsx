import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const response = await axios.post(apiUrl + "/api/user/login", {
      email: email,
      password: password,
    });

    if (response) {
      const token = response.data.token;
      console.log(token,"token")
      localStorage.setItem("token", token);
      navigate("/");
      toast.success("Logged In Successfully");
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
        New Here?
        <Link to="/signup" className="text-violet-500">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
