import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth-route.js";
import userRouter from "./routes/user-routes.js";
import listingRouter from "./routes/listing-routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to MONGODB ..........!!!!!!");
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(3000, () => {
  console.log("server running on Port 3000");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter)
app.use("/api/listing", listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
