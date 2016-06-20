'use strict';

module.exports = function socketHandler(config, io) {

  io.on('connection', function(socket) {
    socket.emit('EHLO');

    // source can either be 'providers' or 'hydraters'
    socket.on('source', function(source) {
      // socket.join(source);
      // socket.emit('urls', config.urls[source]);

      // stop polling on disconect if there are no more users
      socket.on('disconnect', function() {
      });
    });
  });
};
