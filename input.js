// setup interface to handle user input from stdin

// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.on('data', handleUserInput);
    stdin.resume();
    return stdin;
  };

const handleUserInput = function () {
    // your code here
    if (key === MOVE_UP_KEY) {
        connection.write('Move: up');
      }
      if (key === MOVE_LEFT_KEY) {
        connection.write('Move: left');
      }
      if (key === MOVE_DOWN_KEY) {
        connection.write('Move: down');
      }
      if (key === MOVE_RIGHT_KEY) {
        connection.write('Move: right');
      }
  };

  module.exports = setupInput;