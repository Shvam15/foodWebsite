import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import toast from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [token, setToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  let closeModalTimeout;

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const userToken = () => {
    const user = localStorage.getItem("token");
    setToken(user);
  };

  useEffect(() => {
    userToken();
  });

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const userLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setShowModal(false);
    navigate("/");
    toast.success("User Logout Successfully")
  };
  const handleMouseOver = () => {
    if (closeModalTimeout) clearTimeout(closeModalTimeout);
    setShowModal(true);
  };

  const handleMouseOut = () => {
    closeModalTimeout = setTimeout(() => {
      setShowModal(false); // Close modal after delay
    }, 200);
  };

  return (
    <div className="p-10 w-full h-20 flex justify-between items-center z-50">
      <div className="logo">
        <img src={assets.logo} alt="logo" />
      </div>
      <div className="nav flex gap-5">
        <Link
          to="/"
          onClick={() => handleLinkClick("/")}
          className={activeLink === "/" ? "text-red-500 font-bold" : ""}
        >
          Home
        </Link>
        <Link
          to="/menu"
          onClick={() => handleLinkClick("/menu")}
          className={activeLink === "/menu" ? "text-red-500 font-bold" : ""}
        >
          Menu
        </Link>
        <Link
          to="/contact"
          onClick={() => handleLinkClick("/contact")}
          className={activeLink === "/contact" ? "text-red-500 font-bold" : ""}
        >
          Contact Us
        </Link>
        <Link
          to="/about"
          onClick={() => handleLinkClick("/about")}
          className={activeLink === "/about" ? "text-red-500 font-bold" : ""}
        >
          About Us
        </Link>
      </div>
      <div className="icons flex justify-center items-center gap-6">
        <button>
          <Link to="/search">
            <CiSearch />
          </Link>
        </button>

        {token ? (
          <div
            className="relative"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <FiUser />
            {showModal && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 shadow-md p-4 rounded-lg z-50 pointer-events-auto">
                <Link
                  to="/profile"
                  className="block text-black mb-2 hover:underline"
                >
                  View Profile
                </Link>
                <Link
                  to="/settings"
                  className="block text-black mb-2 hover:underline"
                >
                  Settings
                </Link>
                <button
                  onClick={userLogout}
                  className="block text-black hover:underline"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button>
            <Link to="/login">Login</Link>
          </button>
        )}

        <button>
          <Link to="/cart">
            <BsCart3 />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
