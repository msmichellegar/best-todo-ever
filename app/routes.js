module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function(req, res) {
			res.view('index');
		}
	},
	{
		method: 'GET',
		path:'/public/{path*}',
		handler: {
			directory: {
				path: './public'
			}
		}
	}
]