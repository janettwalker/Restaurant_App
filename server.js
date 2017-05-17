var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var data = [{
  name: "placeholder",
  phone: "5555555555",
  email: "place@holder.com",
  id: "uibnu898"
}];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/reserve", function(req, res) {
  data.push(req.body);
  console.log(data);

  res.json({
    complete: true
  });
});

app.get("/api/reservations", function(req, res) {
  var reservations = [];
  for(var i = 0; i < 5 && i < data.length; i++)
  {
    reservations.push(data[i]);
  }
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  var waitlist = [];
  for(var i = 5; i < data.length; i++)
  {
    waitlist.push(data[i]);
  }
  return res.json(waitlist);
});

app.listen(PORT, function() {
  console.log("Server listening on port " + PORT);
});
