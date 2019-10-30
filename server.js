const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send({ message: "Hello Express" });
});

server.get("/favicon.*", (req, res) => {
  res.sendFile("./favicon....");
});

server.listen(3000);
