const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action = '/product' method='post'><input type = 'text' name = 'title' /><input type = 'submit' value = 'Add' /></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express.js</h1>");
});

app.listen(3000);
