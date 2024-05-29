const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  name: String,
  age: Number,
  job: String,
  phone: Number,
});
const userModel = mongoose.model("Users", usersSchema);
module.exports = userModel;
