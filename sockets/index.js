const socketio = require('socket.io');

module.exports.listen = (app) => {
  io = socketio.listen(app);
  
  io.sockets.on('connection', (socket) => {
    console.log('sockets:connection');
  // normal bet
    socket.on('bet', (from, msg) => {
      console.log('test in bet');
      console.log(from);
      console.log(msg);
      socket.broadcast.emit('bet', from, msg); // send information to other players
    });
    //
    socket.io('unbet', (from, msg) => {
      console.log('test in unbet');
      console.log(from);
      console.log(msg);
      socket.broadcast.emit('unbet', from, msg); // send information to other players
    });

    socket.on('disconnect', (first, secon) => {
      console.log('test in disconnect');
      console.log(first);
      console.log(second);
    });
  }); // end connection

  // new room test
  const messages = io.of('/messages');
  messages.on('connection', (socket) => {
    console.log('messages:connection');
  });
  return io;
};
