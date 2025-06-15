import http from "http";
import fs from "node:fs/promises";

const server = http.createServer((req, res) => {
  req.on("data", (reqBody) => {
    console.log(reqBody.toString());
    fs.writeFile("text.txt", reqBody);
  });

  res.setHeader("Content-Type", "text/txt; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end("hello");
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
