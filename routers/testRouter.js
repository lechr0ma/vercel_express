const { Router } = require("express");

const testRouter = new Router();

testRouter.get("/", (req, res) => res.send("testrouter blank"));
testRouter.get("/api", (req, res) => res.send("testrouter api"));

module.exports = testRouter;
