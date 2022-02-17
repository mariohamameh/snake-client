const net = require("net");
const { markAsUntransferable } = require("worker_threads");

const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: 'localhost',// IP address here,
      port: 50541// PORT number here,
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on("connect", () => {
      // code that does something when the connection is first established
      console.log("somebody just joined!");
      conn.write("Name: MAR");
    });
    
    conn.on('data', (data) => {
          //console.log("Move: up");
          console.log('Server says: ', data);
          conn.end();
        });
    conn.on('end', () => {
          console.log('disconnected from server');
    });
    return conn;
  };
console.log("Connecting ...");
connect();

module.exports = connect;