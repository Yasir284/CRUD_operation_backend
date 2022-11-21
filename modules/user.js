const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    require: [true, "Name is required"],
    unique: true,
  },
});

module.exports = mongoose.model("user", userSchema);
