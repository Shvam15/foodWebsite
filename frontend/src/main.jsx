import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ShopContextProvider from "./components/ShopContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
      <ShopContextProvider>
        <div>
          <Toaster />
        </div>
        <App />
        <ToastContainer />
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
