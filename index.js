const http = require("http");

const fs = require("fs");

const site = http.createServer(function (req, res) {
  fs.readFile("test.json", function (error, data) {
    const holder = JSON.parse(data);

    console.log(holder);
    res.setHeader("Content-Type", "application/json");
    res.write(data);

    console.log(holder.firstName + " " + holder.lastName);

    res.end();
  });
});

site.listen(3000);
