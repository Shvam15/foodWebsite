import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/payementController.js";

const paymentRouter = express.Router();

paymentRouter.post("/checkout", checkout);
paymentRouter.post("/paymentVerification", paymentVerification);

export default paymentRouter;
