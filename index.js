const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const productRoutes = require("./src/routes/products");
const authRoutes = require("./src/routes/auth");

//MIDLLEWARE
app.use(bodyParser.json()); //type JSON

//HANDLE CORS ORIGIN
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1/customer", productRoutes);

//API FOR MERN BLOG
app.use("/v1/auth", authRoutes);

app.listen(4000);
