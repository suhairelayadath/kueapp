var mongo = require("mongoskin");
var db = mongo.db("localhost:27017/kueapp?auto_reconnect");
console.log("connected to mongodb");

db.collection("tweets").insert({
	content: "Welcome tweet from kueapp",
	publishAt: new Date(2013, 12, 03, 8, 30),
	createdAt: new Date(2013, 12, 02, 8, 30),
	published: false
}, {safe: true}, function(err, result){
	if (err) {
		console.error("MongoDB insert error", err)
	}else{
		console.log("Insert success", result);
	};

});