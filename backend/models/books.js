const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
  },
  description: String,
  image: String,
  author: {
    type: String,
    required: true,
    minlength: 3,
  },
  image_url: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
  },
  genre: {
    type: [String],
    required: true,
  },
  year_published: {
    type: Number,
    default: new Date().getFullYear(),
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
