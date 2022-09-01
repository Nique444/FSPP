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

  const checkSeriesBoolean = (req, res, next) => {
    const { is_series } = req.body;
    if (
        is_series === "true" ||
        is_series === "false" ||
        is_series === undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_series must be a boolean value" });
    }
  };
  
  const checkFavBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    if (
      is_favorite === "true" ||
      is_favorite === "false" ||
      is_favorite === undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
  };

  module.exports = { checkTitle, checkAuthor, checkSeriesBoolean, checkFavBoolean };