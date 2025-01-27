import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";
import {app,server} from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "https://innovix-chat.vercel.app", // Production frontend URL
      "http://localhost:5173", // Development frontend URL
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie"],
  })
);
app.options("*", cors());  

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes);


server.listen(PORT, ()=>{
    console.log("server is running on port "+PORT);
    connectDB();
});
