const express = require("express");
const mongoose = require("mongoose");

// Connect to database
mongoose
  .connect("mongodb://localhost/news-website", { useNewUrlParser: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

// Configure express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ msg: true });
});

app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
