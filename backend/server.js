import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import connectToDatabase from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import paymentRouter from "./routes/paymentRoute.js";
import razorpay from "razorpay";

configDotenv();
connectToDatabase();

const app = express();
const port = process.env.PORT;

export const instance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

//middlewares
app.use(express.json());
app.use(cors());

//food api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

//user routes
app.use("/api/user", userRouter);

//payment routes
app.use("/api/payment", paymentRouter);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_KEY_ID })
);

//test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
