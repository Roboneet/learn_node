var http = require("http")
var concat = require("concat-stream")
var list = {};
var count = 0;


http.get(process.argv[2], function(response){
		response.pipe(concat(function(data){
			list[0] = data.toString();
			count++;
			if(count == 3){
				for(var j= 0; j<3; j++){
					console.log(list[j]);
				}
			}
		}))
	})

http.get(process.argv[3], function(response){
		response.pipe(concat(function(data){
			list[1] = data.toString();
			count++;
			if(count == 3){
				for(var j= 0; j<3; j++){
					console.log(list[j]);
				}
			}
		}))
	})

http.get(process.argv[4], function(response){
		response.pipe(concat(function(data){
			list[2] = data.toString();
			count++;
			if(count == 3){
				for(var j= 0; j<3; j++){
					console.log(list[j]);
				}
			}
		}))
	})