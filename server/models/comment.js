const mongoose = require("mongoose");
const { PostSchema } = require("../models/post");
const { UserSchema } = require("../models/user");

const CommentSchema = new mongoose.Schema(
  {
    commentBody: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model("Comments", CommentSchema);
module.exports = {
  Comments,
  CommentSchema,
};
