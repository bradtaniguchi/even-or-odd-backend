const socketio = require('socket.io');

module.exports.listen = (app) => {
  io = socketio.listen(app);
  io.sockets.on('connection', (socket) => {
    console.log('sockets:connection');
  });
  const messages = io.of('/messages');
  messages.on('connection', (socket) => {
    console.log('messages:connection');
  });
  return io;
};
