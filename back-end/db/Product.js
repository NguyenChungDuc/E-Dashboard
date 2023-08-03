const mongoose = require("mongoose"); // login mongo

const userSchema = new mongoose.Schema({
  // xac dinh luoc do
  nameDish: String, // them truong du lieu muon luu tru
  imageUrl: String,
  price: Number,
});
module.exports = mongoose.model("products", userSchema);
