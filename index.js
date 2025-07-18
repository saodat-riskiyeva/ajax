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
const data = {
  users: [
    { user: "user", password: "pass", id: 1 },
    { user: "user2", password: "pass2", id: 2 },
    { user: "user3", password: "pass3", id: 3 },
  ],
};

console.log(__dirname);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.post("/users", function (req, res) {
  //create and add user
  req.body.id = data.users.length + 1;
  data.users.push(req.body);
  console.log(data);
  console.log(req.body);

  res.send("CREATE user by ID");
});

app.get("/users", function (req, res) {
  // get data for all users
  res.send("GET all users data");
});

app.get("/users/:id", function (req, res) {
  console.log(req.params);
  // get user data by id
  res.send("GET user data by ID");
});

app.put("/users/:id", function (req, res) {
  // update user data by id
  res.send("UPDATE user data by ID");
});

app.delete("/users/:id", function (req, res) {
  // delete user by id
  res.send("DELETE user by ID");
});

app.listen(3000);
