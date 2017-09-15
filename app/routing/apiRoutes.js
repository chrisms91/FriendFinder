var friendsData = require("../data/friends.js");

function apiRouter(app, path){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });
}

