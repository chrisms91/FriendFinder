// Dependencies
// ==================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// ==================================================================
var app = express();
var PORT = process.env.PORT || 3000;
var htmlRouter = require("./routing/htmlRoutes.js");
var apiRouter = require("./routing/apiRoutes.js");

// Sets up the Express app to handle data parsing
// ==================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vnd.api+json"}));

// Call Routers
// ==================================================================
htmlRouter(app, path);
apiRouter(app, path);

// Starts the server to begin listening
// ==================================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});

