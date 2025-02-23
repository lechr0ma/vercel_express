const express = require("express");
const testRouter = require("./routers/testRouter");
let reqCounter = 0;
const app = express();
app.use((req, res, next) => {
  reqCounter++;
  console.log(`Request number ${reqCounter}`);
  next();
});
app.get("/counter", (req, res) => {
  res.status(200).json({ error: null, counter: reqCounter });
});
app.get("/", (req, res) => {
    console.log("/ get")
    res.status(200).json({ error: null })
});

app.listen(3000, () => console.log("app working"));
app.use("/test", testRouter);

module.exports = app;
