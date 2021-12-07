const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");

//MIDLLEWARE
app.use(bodyParser.json()); //type JSON

//HANDLE CORS ORIGIN
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//API FOR MERN BLOG
app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    "mongodb://Ganisade:Srimulyati23@cluster0-shard-00-00.ilibt.mongodb.net:27017,cluster0-shard-00-01.ilibt.mongodb.net:27017,cluster0-shard-00-02.ilibt.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-5v60ue-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => console.log("Connection success"));
  })
  .catch((err) => console.log(err));
