const { Schema, model } = require("mongoose");

const drinkSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  liquor: String,
  style: String,
  flavor: String,
  strong: String,
  ingredients: [String],
  directions: String,
  image: String,
});

const Drinks = model("Drinks", drinkSchema);

module.exports = Drinks;
