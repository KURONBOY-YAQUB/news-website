const { Post } = require("../../../models/post");
const { Comment } = require("../../../models/comment");
const { User } = require("../../../models/user");
const express = require("express");
const multer = require("multer");
const router = express.Router();

// UPLOAD IMAGES WITH MULTER

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// init upload
const upload = multer({
  storage: storage,
}).single("images");

router.post("/upload_images", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({
        result: "failed",
        message: `Cannot upload files. Error is ${err}`,
      });
    } else {
      if (req.file === undefined) {
        res.status(400).json({
          result: "failed",
          message: "You are not submit images",
        });
      } else {
        console.log(req.file);
        res.status(200).json({
          result: "ok",
          message: "Upload image successfully",
          path: req.file.originalname,
        });
      }
    }
  });
});

// handle slug of news url
const slugWithDate = (text) => {
  let myText = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
  return myText;
};

// route api/posts
// CREATE A NEW POST
// access PUBLIC

router.post("/posts", (req, res) => {
  const { title, author, description, category, images, tags } = req.body;
  const x = Math.floor(Math.random() * 100000 + 1);
  const slug = slugWithDate(req.body.title + "-" + x);

  const newPost = new Post({
    title,
    author,
    description,
    category,
    images,
    tags,
    slug,
  });

  newPost
    .save()
    .then((post) => {
      res.status(200).json(post);
      // res.redirect('/admin/posts')
    })
    .catch((err) => res.status(400).json(err));
});

// route api/posts
// GET ALL POSTS
// access PUBLIC

router.get("/posts", (req, res) => {
  Post.aggregate(
    { $lookup: { from: 'comments', localField: '_id', foreignField: 'post_id', as: 'comments' } },
    {
                $project: {
                    _id: 1,
                    post_title: "$title",
                    description: 1,
                    comments: 1
                }
            }
  )
  ///Post.find()
    .sort({ createOn: -1 })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(400).json(err));
});

// route api/posts/:id
// DELETE A POST
// access PUBLIC

router.delete("/posts/:id", (req, res) => {
  const id = req.params.id;

  Post.findByIdAndDelete(id)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(400).json(err));
});

// route api/posts/comment
// GET ALL COMMENT
router.get("/posts/comment", async (req, res) => {
  const comments = await Comment.find()
    .populate("postId")
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(400).json(err));

  console.log(comments);
});

// route api/posts/:id/comment
// INSERT COMMENT

router.post("/posts/:id/comment", async (req, res) => {
  const id = req.params.id;
  const comment = new Comment({
    commentBody: req.body.commentBody,
    postId: id,
  });

  comment
    .save()
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
