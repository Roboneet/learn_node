var fs = require("fs");

module.exports = function(file_path, ext, callback){
	
	fs.readdir(file_path, function(err, list){
		if(err) return callback(err, null);
		
		var filtered_list = list.filter(function(item, index){
			extension = item.split('.').slice(-1);
			return extension[0] == ext && item.split('.').length > 1; 
		})
		return callback(null, filtered_list);

	})
}