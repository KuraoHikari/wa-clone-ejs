const express = require("express");
const bodyParser = require("body-parser");
const socket = require("socket.io");

const app = express();
app.use(
 bodyParser.urlencoded({
  extended: false,
 })
);
app.use(express.static("public"));
app.set("view engine", "ejs");
var port = process.env.PORT || 3000;

app.get("/", (req, res) => {
 res.render("index");
});

//Start Server
const server = app.listen(port, () => {
 console.log(
  `Server Running on port ${port}`
 );
});
