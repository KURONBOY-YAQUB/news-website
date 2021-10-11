const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createOn: {
    type: Date,
    default: Date.now,
  },
  images: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  // comments: { type: Schema.Types.ObjectId, ref: "comment" },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = {
  PostSchema,
  Post,
};
