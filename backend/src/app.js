const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const LoginRoute = require("./route/LoginRoute");

app.use(cors());
app.use(express.json());
app.use(LoginRoute);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static("public"));

module.exports = app;
