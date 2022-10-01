const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: {
      type: Number,
      require: true,
    },
    usuario: {
      type: String,
      require: true,
    },
    pasword: {
      type: String,
      require: true,
    },
  },
  { collection: "user" }
);
module.exports = mongoose.model("User", userSchema);
