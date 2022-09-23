const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1/loginSystem";

mongoose.connect(url, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Base de Datos conectada correctamente");
});
