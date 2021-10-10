const express = require("express");
const router = express.Router();
const { User } = require("../../../models/user");

// route: POST/api/user/register
// register new user

router.post("/register", async (req, res) => {
  const { email, password, username, usertype } = req.body;

  const newUser = new User({
    email,
    password,
    username,
    usertype,
  });

  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).json({ msg: "Mavjud bo'lgan foydalanuvchi" });
  }

  newUser
    .save()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
});
module.exports = router;
