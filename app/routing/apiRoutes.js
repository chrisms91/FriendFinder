// Grab friends data from friends.js
var friendsData = require("../data/friends.js");

// Function that contains api route
function apiRouter(app, path){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
        
        var newFriend = req.body;
        var differenceArray = [];

        // Calculate all diffs and store it in array
        for(var i=0; i<friendsData.length; i++){
            differenceArray.push(calculateDiff(newFriend, friendsData[i]));
        }
        console.log("differenceArray: ");
        console.log(differenceArray);
        // Find the closest match, it returns index
        var closestMatchIndex = indexOfMin(differenceArray);

        console.log("closestMatchIndex: " + closestMatchIndex);
        console.log("matched");
        console.log(friendsData[closestMatchIndex]);

        // response with matching friend's data in JSON format
        res.json(friendsData[closestMatchIndex]);

        // Store newFriend data in friendsData
        friendsData.push(newFriend);
    })
}

// Calculate differences index by index
function calculateDiff(newFriend, friend) {
    console.log("called calDiff()")
    var diff = 0;
    var newScores = newFriend.scores;
    var friendScores = friend.scores;

    for(var i=0; i<newScores.length; i++){
        diff += Math.abs(parseInt(newScores[i]) - parseInt(friendScores[i]));
    }

    return diff;
}

// Find the minimum difference from array and return its index
function indexOfMin(arr) {
    console.log("called indexofMin()")
    if (arr.length === 0){
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i] < min){
            minIndex = i;
            min = arr[i];
        }
    }
    
    return minIndex;
}

module.exports = apiRouter;