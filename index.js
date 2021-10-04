const io = require("socket.io")(3000, {
   hearts: {
      origin: "http://127.0.0.1:5500",
   },
});

io.on("connection", function (socket) {
   console.log(socket.id);
   socket.on("chat", (msg) => {
      io.sockets.emit("chat", msg);
   });
});
