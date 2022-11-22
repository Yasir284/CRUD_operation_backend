require("dotenv").config();
const express = require("express");
const app = express();
require("./config/db").connect();
const useroutes = require("./routes/userRoutes");

// cors
const cors = require("cors");
const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
  optionSucessStatus: true,
};

//Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", useroutes);

module.exports = app;
