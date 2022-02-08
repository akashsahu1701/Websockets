const http = require("http");
const express = require("express");
const cors = require("cors");

const router = require("./router");
const { addUser, getUser, removeUser } = require("./room");

const app = express();
app.use(cors());
app.use(router);

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("join", ({ mobile }, callback) => {
    const { error, user } = addUser({ id: socket.id, mobile });

    if (error) return callback(error);

    socket.join(user.room);
    io.to(user.room).emit("message", {
      user: "Admin",
      text: `${user.mobile} has joined.`,
    });
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.mobile, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.mobile} has left.`,
      });
    }
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);
