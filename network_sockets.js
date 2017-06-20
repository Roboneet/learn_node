var net = require("net")
var socket = net.createServer(function(socket){
		
	var date = new Date();
	var year, month, day, hour, min;
	year = date.getFullYear();
	month = zero_padding(date.getMonth()+1,2)
	day = zero_padding(date.getDate(),2)
	hour = zero_padding(date.getHours(),2)
	min = zero_padding(date.getMinutes(),2)

	data = year + "-" + month + "-" + day+ " "+ hour + ":" + min;
	socket.end(data+'\n')

});
socket.listen(process.argv[2])


function zero_padding(string, length){
	string = string + "";
	
	if(string.length >= length){
		return string
	}
	return  zero_padding("0" + string,length)
}