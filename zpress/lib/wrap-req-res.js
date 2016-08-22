'use strict';
var postConverter = require('./postConventer.js');

var fileExtensionNameAry = require('../config.js').mime;
var main = {
	resWrapper:function(res){
		res['send'] = function(val,code){
			var code = code;
			var val = val;
			if(typeof val === 'object'){
				val = JSON.stringify(val);
			}
			if(!val) val = "";
			if(!code) code = 200;
			res.setHeader("Content-Type","text/plain");
			res.writeHead(code);
			res.write(val);
			res.end();
		}
		return res;
	},
	reqWrapper:function(req){
		var clientData = "";
		req.on('data',function(chunk){
			clientData += chunk;
		})
		req.on('end',function(){
			var r = postConverter(clientData);
			req['PostData'] = r;
			return req;
		});

	},
	getContentType:function(str){
		var contentType = 'text/plain'
		if(!str) return contentType;
		var indexOf = str.lastIndexOf('.');
		if(indexOf === -1) return contentType;
		var extendName = str.substring(indexOf + 1);

		for(var s = 0,len = fileExtensionNameAry.length;s<len;s++){
			if(extendName === fileExtensionNameAry[s].name){
				if(extendName === '.png'){
					console.log(extendName+"  ~~@@@@@@@@@@@@@@@@@@@@@@@@@~~~~",fileExtensionNameAry[s].value);
				}
				contentType = fileExtensionNameAry[s].value;
				break;
			}
		}
		return contentType;
	}
}
module.exports = main;
