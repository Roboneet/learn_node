var http = require("http")
var concat = require("concat-stream")

http.get(process.argv[2], function(response){
	response.pipe(concat(function(data){
		var str = data.toString();
		console.log(str.length)
		console.log(str);
	}))
})