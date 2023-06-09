import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import http from "http";
import { Server as SocketServer } from "socket.io";
import cors from "cors";
import morgan from "morgan";

import { PORT } from "./config.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    // origin: "http://localhost:5173",
  },
});

app.use(cors());
app.use(morgan("dev"));

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.broadcast.emit("message", {
      body: message,
      from: socket.id,
    });
  });
});

app.use(express.static(join(__dirname, "../client/dist")));

server.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
