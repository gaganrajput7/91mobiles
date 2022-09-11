const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: [true, "Email Already Exists"],
  },
  password: {
    type: String,
    required: true,
    min: [8, "Password Length Should Be 8"],
    max: 12,
  },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  docs: [],
});

module.exports = model("user", userSchema);
