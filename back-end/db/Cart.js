const mongoose = require("mongoose"); // login mongo

const cartSchema = new mongoose.Schema({
  // xac dinh luoc do
  nameDish: String, // them truong du lieu muon luu tru
  imageUrl: String,
  price: Number,
  qty: Number,
});
module.exports = mongoose.model("carts", cartSchema);
