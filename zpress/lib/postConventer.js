'use strict'
function main(val){
	var val = val.replace(/%2F/g,'/').replace(/%3A/g,':');
	val = val.split('&');
	var obj = {},item;
	for(var s = 0,ss = val.length;s<ss;s++){
		item = val[s].split('=');
		obj[item[0]] = item[1];
	}
	return obj;
}
module.exports = function(val){
	var val = val.replace(/%2F/g,'/').replace(/%3A/g,':');
	val = val.split('&');
	var obj = {},item;
	for(var s = 0,ss = val.length;s<ss;s++){
		item = val[s].split('=');
		obj[item[0]] = item[1];
	}
	return obj;
};