const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("WOrks"));

app.listen(5000, () => console.log("app working"));

module.exports = app;
