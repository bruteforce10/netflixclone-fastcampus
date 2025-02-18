const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  token: {
    type: String,
    default: "",
  },
  favoriteMovies: {
    type: Array,
    default: [],
  },
});

module.exports = {
  User: mongoose.model("User", userSchema),
};
