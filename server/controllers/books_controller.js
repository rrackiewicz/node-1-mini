let books = [];
let id = 0;

module.exports = {
  read: (req, res) => res.send(books),

  create: (req, res) => {
    const { title, author } = req.body
    let book = {
      id,
      title,
      author
    }
    id++
    books.push(book)
    res.send(books)
  },

  update: (req, res) => {
    let tempIndex = null;
    const { id } = req.params;
    const { title, author } = req.body
    books.forEach((book, i) => {
      if (book.id === Number(id)) {
        tempIndex = i;
      }
    })
    books[tempIndex] = {
      id: tempIndex,
      title: title || books[tempIndex].title,
      author: author || books[tempIndex].author
    }
    res.send(books);
  },

  delete: (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body
    books.forEach((book, i) => {
      if (book.id === Number(id)) {
        books.splice(i, 1)
      }
    })
    res.send(books)
  }
};


