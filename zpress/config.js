'use strict'
var fs = require('fs');
const config = {
    staticFile:{
        regExp:/(\.gif|\.htm|\.js|\.css|\.html|\.jpg|\.png)/g,
        maxAge:10000
    },
    compressedFile:{
        regExp:/(.htm|.js|.css|.html)/g
    },
    mime:[
    	{
    		name:'js',
    		value:'text/javascript'
    	},
    	{
    		name:'css',
    		value:'text/css'
    	},
    	{
    		name:'htm',
    		value:'text/html'
    	},
    	{
    		name:'html',
    		value:'text/html'
    	},
    	{
    		name:'json',
    		value:'text/javascript'
    	},
    	{
    		name:'png',
    		value:'image/png'
    	},
    	{
    		name:'jpg',
    		value:'image/jpeg'
    	},
    	{
    		name:'gif',
    		value:'image/gif'
    	},
    	{
    		name:'bmp',
    		value:'image/bmp'
    	},
    	{
    		name:'txt',
    		value:'text/plain'
    	},
    	{
    		name:'text',
    		value:'text/plain'
    	}
    ],
    getFileType:function(str){
        var type;
        if(!str){
            return undefined;
        }
        var index = str.lastIndexOf('.');
        if(index !== -1){
            type = str.substring(index + 1);
            return type;
        }
    },
    addExpires:function(res,filename){
        if(this.staticFile.regExp.test(filename)){
            var expires = new Date();
            expires.setTime(expires.getTime() + this.staticFile.maxAge);
            res.setHeader('Expires',expires.toUTCString());
            res.setHeader('Cache-Control','max-age=' + this.staticFile.maxAge);
        }
    },
    addLastModified:function(res,filepath){
        var result = fs.statSync(filepath);
        var mtime = result.mtime.toUTCString(); //文件最后一次修改的时间；
        res.setHeader('Last-Modified',mtime);
        return mtime;
    }
}
module.exports = config;
