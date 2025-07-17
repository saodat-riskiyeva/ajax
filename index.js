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
const data = { user: "admin", password: "pass" };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(function (req, res, next) {
//   console.log("I am in the middle");
// });

app.get("/", function (req, res) {
  res.send("GET sent 2");
});

app.post("/login", function (req, res) {
  if (data.user == req.body.user && data.password == req.body.password) {
    res.write("Success");
  } else {
    res.write("Failure");
  }

  console.log(req.body.user);
  res.send("POST sent");
});

app.put("/", function (req, res) {
  res.send("PUT sent");
});

app.delete("/", function (req, res) {
  res.send("DELETE sent");
});

app.listen(3000);
