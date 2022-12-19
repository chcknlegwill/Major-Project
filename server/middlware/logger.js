
//Re-watch DG video on this in order to effectivley use this.
//This cleans up the code on server.js when handling different requests - still needs a lot of work 

//using this npm module called "winston" for logging

// below is default code from the winston docs

app.use(expressWinston.logger({
	transports: [
		new winston.transports.Console()
	],
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json()
	),
	meta: true,
	msg: "HTTP {{req.method}} {{req.url}}",
	expressFormat: true,
	colorize: true,
	ignoreRoute: function(req, res) { return false; }
}));

app.use(router);