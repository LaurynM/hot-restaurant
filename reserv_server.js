// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 3000;

//========STORING STUFF
var tables = [];
var waitList = [];
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/reserve", function(req,res){
  res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/tables", function(req, res){
  res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/api/tables", function(req, res){
  console.log(res);
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res){
  console.log(res);
  return res.json(waitList);
});
  
var reservations = [];
// Create New Reservation - takes in JSON input
app.post("/reserve/new", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the character array
  reservations.push(newReservation);
  if(tables.length<5){
    tables.push(newReservation);
    console.log(tables);
  }else{
    waitList.push(newReservation);
    console.log(waitList);
  }

  // We then display the JSON to the users
  res.json(newReservation);
});


