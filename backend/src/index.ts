import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ credentials:true, origin: "*" }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
  console.log("SERVER - Server running on port:", process.env.PORT || 3000);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("SERVER - Connected to MongoDB instance");
});
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
