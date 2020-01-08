const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  type: { type: String, required: true },
  color: String,
  dateCreated: { type: Date, default: Date.now },
  date: Date,
  people: String,
  topOrBottom: String,
  image: String,
  email: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;