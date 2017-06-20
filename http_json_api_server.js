var http = require("http");
var url = require("url")


var server = http.createServer(function(request, response){
	if(request.method != 'GET')
		return;

	var url_object = url.parse(request.url)
	// console.log(url_object.pathname == '/api/parsetime')
	// console.log(Date)
	// console.log(new Date(url_object.query.split("=")[1]))
	var date = new Date(url_object.query.split("=")[1])
	// console.log(date.getSeconds())
	var data = null;
	if(url_object.pathname == '/api/parsetime'){
		data = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		}
	}else if(url_object.pathname == '/api/unixtime'){
		data = {
			"unixtime": date.getTime()
		}
	}
	// console.log(data)
	response.writeHead(200, { 'Content-Type': 'application/json' })
	response.end(JSON.stringify(data));
})

server.listen(process.argv[2])