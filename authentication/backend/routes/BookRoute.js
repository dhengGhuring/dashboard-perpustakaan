const express = require("express");
const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/Books");

const router = express.Router();

//** Membuat endpoit book */
router.get("/books", getBooks);
router.get("/book/:id", getBookById);
router.post("/book", createBook);
router.patch("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

module.exports = router;
