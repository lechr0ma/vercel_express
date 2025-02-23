const { Router } = require("express");
const testService = require("../testService");

const testRouter = new Router();

testRouter.get("/", (req, res) => res.send("testrouter blank"));
testRouter.get("/api", (req, res) => res.send("testrouter api"));
testRouter.get("/json", testService.getJson);
testRouter.get("/json/:id", testService.getJsonById);
module.exports = testRouter;
