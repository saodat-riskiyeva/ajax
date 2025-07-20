const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./helper/datasim.js");
const data = db.data;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.post("/users", function (req, res) {
  req.body.id = Math.floor(Date.now());
  data.users.push(req.body);

  res.send("CREATE user by ID");
});

app.get("/users", function (req, res) {
  res.json(data);
});

app.get("/users/:id", function (req, res) {
  res.send(db.getRow(req.params.id));
});

app.put("/users/:id", function (req, res) {
  req.body.id = req.params.id;

  const temp = db.findID(data.users, req.params.id);

  if (temp != -1) {
    data.users[temp] = req.body;
    res.write("UPDATED user by User ID " + req.params.id);
  } else {
    res.write("Not found");
  }
  res.send();
});

app.delete("/users/:id", function (req, res) {
  const temp = db.findID(data.users, req.params.id);

  if (temp != -1) {
    data.users.splice(temp, 1);
    res.write("DELETED user by User ID " + req.params.id);
  } else {
    res.write("Not found");
  }
  res.send();
});

app.listen(3000);

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
