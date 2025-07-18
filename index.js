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
  req.body.id = data.users.length + 1;
  data.users.push(req.body);

  res.send("CREATE user by ID");
});

app.get("/users", function (req, res) {
  res.json(data);
});

app.get("/users/:id", function (req, res) {
  res.send(getRow(req.params.id));
});

app.put("/users/:id", function (req, res) {
  res.send("UPDATE user data by ID");
});

app.delete("/users/:id", function (req, res) {
  res.send("DELETE user by ID");
});

app.listen(3000);

function getRow(id) {
  for (let item of data.users) {
    console.log(typeof item.id);
    console.log(typeof id);
    if (item.id == Number(id)) {
      return item;
    }
  }
  return false;
}

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
