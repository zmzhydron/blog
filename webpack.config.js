module.exports = {
	entry:["./src/js/app-raw.js"],
	output:{
		path:__dirname,
		filename:"./src/js/app.js"
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
