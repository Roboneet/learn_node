var http = require("http");
var fs = require("fs");
var concat = require("concat-stream")

var server = http.createServer(function(request, response){
	var read = fs.createReadStream(process.argv[3])
	
	read.pipe(concat(function(data){
		response.end(data.toString());
	}))
	
})

server.listen(process.argv[2])