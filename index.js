// const http = require("http");
// const fs = require("fs");

// const site = http.createServer(function (req, res) {
//   fs.readFile("test.json", function (error, data) {
//     const holder = JSON.parse(data);

//     res.setHeader("Content-Type", "application/json");
//     res.write(data);

//     console.log(holder.firstName + " " + holder.lastName);

//     res.end();
//   });
// });

// site.listen(3000);

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("GET sent");
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("POST sent");
});

app.put("/", function (req, res) {
  res.send("PUT sent");
});

app.delete("/", function (req, res) {
  res.send("DELETE sent");
});

app.listen(3000);
