const { logEvents } = require("./logEvents")
const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.name}`, "errLog.txt")
    console.error(err.stack) //this is .error because it is an error rather than a specific datatype being printed.
    res.status(500).send(err.message);
};

module.exports = errorHandler;