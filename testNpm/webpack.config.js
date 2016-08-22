module.exports = {
	entry:["./app.js"],
	output:{
		path:__dirname,
		filename:"./app_bunlde.js"
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:['style','css']
			},
			{
				test:/\.scss$/,
				loaders:['style','css','sass']
			},
			{
				test:/\.js$/,
				loader:["babel"],
				exclude:/node_modules/,
				query:{
					presets: ['es2015','react'],
					plugins: ['transform-decorators-legacy']
				}
			}
		]
	},
	resolve:['','.js','.css','.scss','.json']
}
