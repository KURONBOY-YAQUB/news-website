const { User } = require("../../../models/user");

// route: POST/api/user/register
// register new user

const register = async (req, res) => {
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
};

//route POST/api/users/login
// login

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user || user.password != password) {
    return res.status(400).json({ errors: "User doesnot exists" });
  }

  return res.json(true);
};

const getAllUsers = async (req, res) => {
  User.find()
    .sort({ registerDate: -1 })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  register,
  login,
  getAllUsers,
  deleteUser,
};
