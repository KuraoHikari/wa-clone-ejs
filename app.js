const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const http =
 require("http").createServer(app);
const io = require("socket.io")(http);
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use(router);

io.on("connection", (socket) => {
 console.log("A user connected.");

 // Handle real-time events
 socket.on("event", (data) => {
  // Handle the event data
  console.log("Received event:", data);

  // Broadcast the event to all connected clients
  io.emit("event", data);
 });

 socket.on("disconnect", () => {
  console.log("A user disconnected.");
 });
});

http.listen(port, () => {
 console.log(
  `Server is running on http://localhost:${port}`
 );
});
