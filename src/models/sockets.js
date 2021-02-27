class Sockets {
  constructor(io) {
    this.io = io;
    this.socketsEvents();
  }
  socketsEvents() {
    this.io.on("connection", (socket) => {
      socket.emit("connected", "Connected");
      socket.on("new-message", (data) => {
        console.log(data);
        this.io.emit("new-message-recived", data);
      });
    });
  }
}

module.exports = Sockets;
