const express = require("express");
const cors = require('cors');
const useragent = require('express-useragent');
const logger = require('morgan');
const APP_NAME = 'pageLike:server';
const debug = require('debug')(APP_NAME);
const likeRoutes = require('./routes/like');

debug('booting %o', APP_NAME);

const app = express();

// enable cors to all
app.use(cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: '*'
}));

// development related Middleware
if (app.get("env") === 'development' || app.get("env") === 'test') {
    app.use(function (req, _, next) {
        req.headers['Pass-Agent-Validation'] = true;
        next();
    });

    // app.use(logger('combined', {
    //   stream: require('fs').createWriteStream('./logs/access.log', { flags: 'a' })
    // }));

    app.use(logger("dev"));
    debug('added development related Middlewares!!');
}

if (app.get("env") === 'test') {
    app.use(function (req, _, next) {
        req.headers['Pass-Origin'] = true;
        next();
    });
}
// request parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(useragent.express());

// routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
});
app.use("/api/like/", likeRoutes);


// don't listen at test mode 
if (app.get("env") !== 'test') {
    const PORT = process.env.PORT || 8001;
    app.listen(PORT, () => {
        console.log('PORT: ', PORT)
        debug('Listening on ' + PORT);
    });
}

module.exports = app;
