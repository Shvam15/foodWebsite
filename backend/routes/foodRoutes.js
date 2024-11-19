import express from "express";
import {
  addFood,
  listFood,
  removeFooditem,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//image storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

//api routes for food
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/listfooditems", listFood);
foodRouter.delete("/removefooditems", removeFooditem);

export default foodRouter;
