// Grab friends data from friends.js
var friendsData = require("../data/friends.js");

// Function that contains api route
function apiRouter(app, path){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });
}

module.exports = apiRouter;