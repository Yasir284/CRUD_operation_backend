require("dotenv").config();
const express = require("express");
const app = express();
require("./config/db").connect();
const useroutes = require("./routes/userRoutes");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(useroutes);
app.use("/", useroutes);

module.exports = app;
