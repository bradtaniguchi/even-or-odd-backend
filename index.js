const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const server = http.createServer(app);

// unused vars below
const io = require('./sockets').listen(server);
const sockets = require('./sockets');

const port = (process.env.PORT || 8081);
app.set('port', port);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// socket connections below

server.listen(port);

console.log('[[even-or-odd-backend]]');
