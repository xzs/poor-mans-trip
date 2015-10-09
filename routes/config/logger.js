var wins = require('winston');

var logger = new (wins.Logger)({
	transports: [
  	new (wins.transports.Console)({'colorize':true,'timestamp':true})
	]
});

module.exports = {
	logstart: function() {

		return logger;
	}
}