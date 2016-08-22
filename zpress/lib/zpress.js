'use strict';
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var tools = require('./wrap-req-res.js');
var postConverter = require('./postConventer.js');

const config = require('../config.js');
const rootPath = process.cwd();
const listener = {}
const FileOpOptions = {encoding:"utf-8",flag:'r'};
const staticPath = {};

let	requestCount = 0;
function mainHandler(req,res){
	var urlobj = url.parse(req.url,true);
	var resolvedPath = resolvePath(urlobj.pathname,rootPath);
	var fullPath = rootPath + urlobj.pathname;
	// var req = tools.reqWrapper(req);
	var res = tools.resWrapper(res);
	console.log(requestCount,"requestCount");
	requestCount++;
	var contentType = tools.getContentType(urlobj.pathname);
	console.log(resolvedPath);
	if(resolvedPath){
		fs.readFile(resolvedPath,{},function(err,data){
			if(err){

			}else{
				// 添加满足要求的expires头；
				config.addExpires(res,urlobj.pathname);
				res.setHeader("Content-Type",contentType);
				var modifiedTime = config.addLastModified(res,resolvedPath);
				console.log("req.headers['ifModifiedSince']" ,req.headers['ifModifiedSince']);
				if(req.headers['if-modified-since'] && modifiedTime === req.headers['if-modified-since']){
					res.writeHead(304);
					console.log('shortcut cache loaded')
					res.end();
				}else{
					res.writeHead(200);
					res.write(data);
					res.end();
				}
			}
		})
	}else{
		fs.exists(fullPath,function(exists){
			let url = fullPath;
			if(exists){
				fs.readFile(url,{},function(err,data){
					if(err){

					}else{
						// 添加满足要求的expires头；
						config.addExpires(res,url);
						res.setHeader("Content-Type",contentType);
						config.addLastModified(res,url);
						var modifiedTime = config.addLastModified(res,url);
						if(req.headers['if-modified-since'] && modifiedTime === req.headers['if-modified-since']){
							res.writeHead(304);
							console.log('fullpath cache loaded')
							res.end();
						}else{
							res.writeHead(200);
							res.write(data);
							res.end();
						}
					}
				})
			}else{
				var pathName = urlobj.pathname.substring(1);
				var method = listener[urlobj.pathname];
				if(method){
					var clientData = "";
					req.on('data',function(chunk){
						clientData += chunk;
					})
					req.on('end',function(){
						var r = postConverter(clientData);
						req['PostData'] = r;

						method.execute(req,res);
					});
				}else{
					res.send(`not such request found!~~~~~~~~~~~~~~~!`,404);
				}
			}
		});
	}

}
/*
	*判断静态网站路径是否存在
	*返回当前的文件后缀名，用来解决setHeader的问题。
*/
function resolvePath(url,rootPath){
	var lastIndexOf = url.lastIndexOf('\/'),
	path = url.substring(0,lastIndexOf + 1),
	filename = url.substring(lastIndexOf + 1),
	shortcut = staticPath[path],
	fullpath;
	if(shortcut && shortcut.length){
		for(var s = 0,ss = shortcut.length;s<ss;s++){
			fullpath = rootPath + shortcut[s] + filename;
			fullpath = fullpath.replace(/\\/g,'/');
			console.log(fullpath +" fullpath");
			if(fs.existsSync(fullpath)){
				// console.log(" matched full path   ", fullpath);
				return fullpath;
			}
		}
	}
	return false;
}

function createApplication(){
	var app = {
		listen:function(port){
			return http.createServer(mainHandler).listen(port);
		},
		use:function(path,callback){
			var path = path;
			if(!path){
				path = '/';
			}
			var methods = listener[path];
			if(!methods) {
				methods = listener[path] = {
					fns:[],
					count:0,
					execute:function(req,res){
						this.fns[this.count](req,res,function(){
							this.count++;
							this.execute(req,res);
						}.bind(this));
					}
				};
			}
			methods.fns.push(callback);
		},
		static:function(a,b){
			if(arguments.length === 1 && a === undefined){
				return;
			}
			let short = '/',full;
			if(arguments.length === 2 && a !== undefined){
				short = a;
				full = b;
			}
			if(arguments.length === 1){
				full = a;
			}
			var path = staticPath[short];

			if(!path){
				staticPath[short] = path = [];
			}
			path.push(full);
		}
	};
	return app;
}

module.exports = createApplication;
// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd())


