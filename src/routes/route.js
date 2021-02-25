const express = require("express");
const routes = express.Router();

//Home
routes.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "views/index.html"));
  res.render("index", { title: "Art|Yuyo Illustration" });
});

//Contact
routes.get("/contact", (req, res) => {
  res.render("contact", { title: "Art|Yuyo Illustration" });
});

module.exports = routes;
