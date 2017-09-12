const socketio = require('socket.io');

module.exports.listen = (app) => {
  io = socketio.listen(app);
  io.sockets.on('connection', (socket) => {
    console.log('sockets:connection');

    socket.on('bet', (from, msg) => {
      console.log('test in bet');
      console.log(from);
      console.log(msg);
    });
  });

  // new room test
  const messages = io.of('/messages');
  messages.on('connection', (socket) => {
    console.log('messages:connection');
  });
  return io;
};
