const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); //login
const bodyParser = require("body-parser");
const AuthRoute = require("./route/auth");
const Cors = require("cors");
mongoose.connect("mongodb://localhost:27017/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Base de datos conectada");
});

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});

app.use("/api", AuthRoute);
