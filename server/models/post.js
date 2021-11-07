const mongoose = require("mongoose");

<<<<<<< HEAD
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    images: {
      type: String,
      // required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
=======
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId, ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    
    type: Schema.Types.ObjectId, ref: "Category",
    required: true,
  },
  images: {
    type: String,
    // required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  tags: {
    type: [String],
  },
},
                                       {
        timestamps: true,
    }
                      );
>>>>>>> 83e603d7e7655629398d6824dd039eae70c1d9de

const Post = mongoose.model("Post", PostSchema);

module.exports = {
  PostSchema,
  Post,
};
