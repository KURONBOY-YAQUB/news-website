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
<<<<<<< HEAD
  {
    timestamps: true,
  }
);
=======
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  //Tipini ko'rsatibsan, post jadvali bilan bog'lanish qani?
  //Hamma modellaringda shu xatolik tyog'rla!
  //Qolgan polyalarga ham REF qo'sh va aniqlashtirib ishla
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
>>>>>>> 83e603d7e7655629398d6824dd039eae70c1d9de

const Comments = mongoose.model("Comments", CommentSchema);
module.exports = {
  Comments,
  CommentSchema,
};
