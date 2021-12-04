const express = require("express");

const app = express();

app.use(() => {
  console.log("helo server");
  console.log("hello 3");
});

app.listen(4000);
