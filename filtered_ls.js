var fs = require("fs");
fs.readdir(process.argv[2], function(err, list){
	if(err) throw err;
	var filtered_list = list.filter(function(item, index){
		extension = item.split('.').slice(-1);
		return extension[0] == process.argv[3] && item.split('.').length > 1; 
	})
	filtered_list.forEach(function(ele, index){
		console.log(ele)
	})
})