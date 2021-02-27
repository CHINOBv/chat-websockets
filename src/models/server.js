const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");

const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    this.server = http.createServer(this.app);
    this.io = socketio(this.server);
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configSockets() {
    new Sockets(this.io);
  }

  execute() {
    this.middlewares();
    this.configSockets();
    this.server.listen(this.port, () =>
      console.log("Server Socket Is Runing Port:", this.port)
    );
  }
}

module.exports = Server;
