const http = require("http");
const data = {
  firstName: "Laurence",
  lastName: "Benson",
};

const site = http.createServer(function (req, res) {
  console.log("Here I am");
  console.log(req.headers);
  console.log(req.url);

  //   res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(data));

  res.end();
});

site.listen(3000);
