const checkTitle = (req, res, next) => {
    if (req.body.title) {
      next();
    } else {
      res.status(400).json({ error: "Title is required" });
    }
  };
  
  const checkAuthor = (req, res, next) => {
    if (req.body.author) {
      next();
    } else {
      res.status(400).json({ error: "Author is required" });
    }
  };


  module.exports = { checkTitle, checkAuthor };