import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import cors from "cors";
import morgan from "morgan";

import { PORT } from "./config.js";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(cors());
app.use(morgan("dev"));

io.on("connection", () => {
  console.log("a user connected");
});

server.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
