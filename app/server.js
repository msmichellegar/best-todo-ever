var Hapi = require('hapi');
var routes = require('./routes.js');
var handlebars = require('handlebars');
var server = new Hapi.Server();

var redis  = require("redis");
var redisAdaptor = require("./redis.js");
var client = redis.createClient();

server.connection({
	port: 9090
});

server.views({
  engines: {
    html: handlebars
  },
  relativeTo: __dirname,
  path: '../public/views'
});

server.route(routes);

server.start();
