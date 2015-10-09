/*
 * Module dependencies.
 */
var express = require('express')
  , winston = require('./routes/config/logger')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')

var logger = winston.logstart();
var app = express();
var morgan  = require('morgan');
/*
* App configuration
*/
var port = 8000;
app.set('views', __dirname + '/public');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('combined'))

app.get('/', routes.index);

// REST API routes.


http.createServer(app).listen(port, function(){
  logger.info("Starting the express app...");
  logger.info("Express server listening on port " + port);
});
