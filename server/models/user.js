const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  usertype: {
    type: Boolean,
    default: false,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  UserSchema,
  User,
};
