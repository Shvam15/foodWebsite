import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import SignUpForm from "./pages/Signup";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import "./App.css";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const App = () => {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {});
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
