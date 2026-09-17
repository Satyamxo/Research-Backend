import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/performance_test")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api", productRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});