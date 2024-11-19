import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Login from "./Login";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  const signupData = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required!");
    }

    const response = await axios.post(apiUrl + "/api/user/signup", {
      name: name,
      email: email,
      password: password,
    });

    console.log(response, "res");

    if (response.data.success) {
      console.log(response.data)
      toast.success(response.data.message);
      setToken()
      localStorage.setItem("token", token);
      navigate("/");
    }
  };

  const userToken = () => {
    const user = localStorage.getItem("token");
    setToken(user);
  };

  useEffect(()=>{
    userToken()
  },[token])

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="w-full px-3 py-2 mt-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            {/* <div>
           <label className="block text-sm font-medium text-gray-700">
           Confirm Password
           </label>
           <input
           type="password"
           value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
             required
             className="w-full px-3 py-2 mt-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             placeholder="Confirm your password"
           />
           </div> */}
            <div>
              <button
                onClick={signupData}
                // type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div>
            Already have an Account?{" "}
            <Link to="/login" className="text-violet-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
