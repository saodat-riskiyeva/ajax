const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const data = {
  users: [
    { user: "Benito", password: "otineb", id: 1753035065982 },
    { user: "Ashley", password: "yelhsa", id: 1753035214635 },
    { user: "Daniel", password: "leinad", id: 1753035242900 },
    { user: "Martin", password: "nitram", id: 1753035303703 },
    { user: "Ursula", password: "alusru", id: 1753035305016 },
  ],
};

console.log(__dirname);

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
