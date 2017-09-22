const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const path = require('path');
const server = http.createServer(app);

/*global path*/

// unused vars below
const io = require('./sockets/sockets').listen(server);
// const sockets = require('./sockets/sockets');
const errorHandler = require('./error-handler');

// serve static content
app.use(express.static(path.join(__dirname, 'public')));

//error handlers
app.use(errorHandler);
const port = (process.env.PORT || 8081);
app.set('port', port);

// general middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// socket connections below

server.listen(port);

console.log('[[even-or-odd-backend]]');
