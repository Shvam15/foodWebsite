import express from "express";
import fs from "fs";
import foodModel from "../models/foodModel.js";

// add food items
const addFood = async (req, res) => {
  let imageFileName = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: imageFileName,
  });

  try {
    await food.save();
    res.json({
      message: "Food item added successfully",
      data: food,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Failed to add food item",
      success: false,
    });
  }
};

//list food items
const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({
      message: "Food items listed successfully",
      data: food,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Failed to list food items",
      success: false,
    });
  }
};

const removeFooditem = async (req, res) => {
  try {
    const food = await foodModel.findByIdAndDelete(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    res.json({
      message: "item removed successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Failed to remove food item",
      success: false,
    });
  }
};

export { addFood, listFood, removeFooditem };
