'use strict';
// https://cnodejs.org/topic/4f16442ccae1f4aa27001071
var zpress = require('./../zpress/index');

var app = zpress();

const stream = require('stream');

const fakeAry = [1,2,3,4,5,6,7]

class READ extends stream.Readable{
	constructor(){
		super();
	}
	_read(){
		for(var s of fakeAry){
			this.push(s+"");
		}
		this.push(null);
	}
}

var rs = new READ();

app.listen(8082);

app.use('/fuckyou',function(req,res,next){
	// console.log('fuck you required one')
	res.passData = {
		count:"q"
	}
	next();
})
app.use('/fuckyou',function(req,res,next){
	// console.log('fuck you required two  '+res.passData.count);
	res.passData.count += 'w';
	next();
})
app.use('/fuckyou',function(req,res,next){
	// console.log('fuck you required three  '+res.passData.count);
	res.passData.count += 'r';
	next();
})
app.use('/fuckyou',function(req,res,next){
	// console.log('fuck you required four  '+res.passData.count);
	// console.log(res.passData);
	// res.send(" fuck you responsed~~~");
	rs.pipe(res);
	// next();
})


app.static('/src/js/');
app.static('/src/page/');
app.static('/ser/css/');
