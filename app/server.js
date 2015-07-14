var Hapi = require('hapi');
var routes = require('./routes.js');
var handlebars = require('handlebars');

var server = new Hapi.Server();

server.connection({
	port: 9090
})

server.views({
  engines: {
    html: handlebars
  },
  relativeTo: __dirname,
  path: '../public/views'
});

server.route(routes);

server.start();