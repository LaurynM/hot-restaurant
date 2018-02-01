// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 3000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [];
// Create New Reservation - takes in JSON input
app.post("/reservation/new", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the character array
  reservations.push(newReservation);

  // We then display the JSON to the users
  res.json(newReservation);
});