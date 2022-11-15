const express = require("express");
const testRouter = require("./routers/testRouter");

const app = express();

app.get("/", (req, res) => {
    console.log("/ get")
    res.status(200).json({ error: null })
});

app.listen(5000, () => console.log("app working"));
app.use("/test", testRouter);

module.exports = app;
