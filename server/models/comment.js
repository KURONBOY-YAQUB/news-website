const mongoose = require("mongoose");
const { PostSchema } = require("../models/post");
const { UserSchema } = require("../models/user");

const CommentSchema = new mongoose.Schema({
  commentBody: {
    type: String,
    required: true,
  },
  commentDate: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  postId: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
    required: true,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = {
  Comment,
  CommentSchema,
};
