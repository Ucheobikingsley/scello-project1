
// const Sequelize = require('sequelize');
// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const PORT = 2345 || process.env.PORT
// const path = require('path');
// const bodyParser = require('body-parser');
// const db = require("./public/models");



const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./public/models");

const PORT = process.env.PORT || 8086;
require("./public/routes/tutorial.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});






// server.listen(PORT,()=>{
//     console.log(`Listening to port ${2345}`)
// })





