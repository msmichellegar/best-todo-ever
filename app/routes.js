module.exports = [
	{
		method: 'GET',
		path:'/{path*}',
		handler: {
			directory: {
				path: './public'
			}
		}
	}
];
