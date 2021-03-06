//File: server.js
//Author: Keijaoh Tutorials
//credentials to connect to the database
var credentials = require("./credentials");
const express = require("express");
var bcrypt = require("bcrypt");
var crypto = require("crypto-js");
//need sequelize to interact with the SQL database
var Sequelize = require("sequelize");
const app = express(); //initializing express js
const PORT = 8085;

//initialize sequelize to connect to the database

var databaseConnection = new Sequelize(
  credentials.databaseName,
  credentials.userName,
  credentials.password,
  {
    dialect: "mssql",
    host: credentials.hostName,
    port: 1433, // DB default Port
    logging: false,
    dialectOptions: {
      requestTimeout: 30000, // time out is 30 seconds
    },
  }
);

//create a test home route
app.get("/", function (request, response) {
  response.send("Welcome to Keijaoh Tutorials!");
});

//register the port
app.listen(PORT);
console.log("server is running on http://127.0.0.1:" + PORT);
