var myfunc = require('./lib.js')

myfunc(process.argv[2],process.argv[3],function(err, data){
	if(err) throw err;
	data.forEach((item) => console.log(item))
})