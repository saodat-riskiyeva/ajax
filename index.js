const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const data = {
  users: [
    { user: "user1", password: "pass1", id: 1 },
    { user: "user2", password: "pass2", id: 2 },
    { user: "user3", password: "pass3", id: 3 },
    { user: "user4", password: "pass4", id: 4 },
    { user: "user5", password: "pass5", id: 5 },
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
  req.body.id = req.params.id;
  const temp = data.users.indexOf(getRow(req.params.id));

  if (temp != -1) {
    data.users[temp] = req.body;
    res.write("UPDATED user by User ID " + (temp + 1));
  } else {
    res.write("Not found");
  }
  res.send();
});

app.delete("/users/:id", function (req, res) {
  const temp = data.users.indexOf(getRow(req.params.id));

  if (temp != -1) {
    data.users.splice(temp, 1);
    res.write("DELETED user by User ID " + (temp + 1));
  } else {
    res.write("Not found");
  }
  res.send();
});

app.listen(3000);

function getRow(id) {
  for (let item of data.users) {
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
