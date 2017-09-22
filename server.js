// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./models/Article");
// Require History Schema
// var History = require("./models/History");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------



var databaseUri = "mongodb://localhost/nytreact";
// MongoDB Configuration configuration (Change this URL to your own DB)
if (process.env.MONGODB_URI) {
    mongoose.connect("process.env.mongodb://<dbuser>:<dbpassword>@ds147044.mlab.com:47044/heroku_8tqs9ws2");
} else {
  mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------
// Main "/" Route. This will redirect the user to our rendered React application

app.get("/", function(req, res) {
  res.sendFile(__dirname + "./public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api/saved", function(req, res) {
  console.log("hello");
  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(10).exec(function(err, doc) {
    console.log("doggy");
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
      // console.log("get", doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api/saved", function(req, res) {
  console.log("BODY: " ,req.body);
  // 　console.log("body", res.body);
  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Article.create({
    articleId:req.body.articleId,
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

app.delete("/api/saved/:id", function(req, res) {
  // console.log("delete with id: ", req.params);
  Article.remove({"_id": req.params.id})
  .exec(function(err, data) {
    if(err){
      console.log(err);
      }else{
        res.send("Deleted");
        console.log("deleted", data);
    }
  });
});
// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
