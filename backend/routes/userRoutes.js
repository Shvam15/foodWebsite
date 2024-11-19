import express from "express";
import { loginUser, signUpUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/signup", signUpUser);

export default userRouter;
