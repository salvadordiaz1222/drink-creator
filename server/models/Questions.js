const { Schema, model } = require("mongoose");

const questionsSchema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  key: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Questions = model("Questions", questionsSchema);

module.exports = Questions;
