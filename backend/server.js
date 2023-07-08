import express from "express";
import dotenv from "dotenv";
dotenv.config();
//require('dotenv').config()
import connectDB from "./config/db.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB();

const port = process.env.port || 5000;
const app = express();

import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server stared on port ${port}`));
