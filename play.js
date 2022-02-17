const net = require("net");
const client = require ("./client");
const input = require ("./input");
  
  console.log("Connecting ...");
  connect();
  
  setupInput(conn);