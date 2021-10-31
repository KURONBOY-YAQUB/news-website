const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = {
  Category,
  CategorySchema,
};
