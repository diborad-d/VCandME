const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  type: { type: String, required: true },
  color: { type: String, required: true },
  date: { type: Date, default: Date.now },
  people: String,
  topOrBottom: String,
  image: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;