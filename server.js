const http = require("http");

const server = http.createServer();

// events

server.on("request", (req, res) => {
  // do
  console.log("Request!!!");
  res.write("Hello HTTP");
  res.end();
});

server.listen(3000);
