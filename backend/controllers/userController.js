import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(password,"pass")
  const user = await userModel.findOne({ email });

  if (!user) {
    res.status(404).send({
      message: "User not found, Please Sign Up",
    });
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    res.status(404).json({
      message: "Invalid Credentials, Please Check",
    });
  }

  if (matchPassword) {
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });

    res.status(200).json({
      token: token,
      message: "Login successful",
    });
  }
};

//signup user
const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "user already registered" });
    }

    // validating email
    if (!validator.isEmail(email)) {
      console.log(email);
      return res.status(400).json({ message: "Please Enter a valid email" });
    }

    const checkPasswordLength = password < 8;

    if (checkPasswordLength) {
      return res
        .status(400)
        .json({ message: "Password should be at least 8 characters" });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //save new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });
    res.json({
      token,
      success: true,
      message: "Signed up successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Error signing up user",
    });
  }
};

export { loginUser, signUpUser };
