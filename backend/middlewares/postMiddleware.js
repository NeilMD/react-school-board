module.exports = ({ logger, validator }) => {
  return (req, res, next) => {
    logger.info("Post Middleware: START");

    let errMsg = null;
    if (req.originalUrl === "/api/post/add") {
      errMsg = validator.postValidator.add(req.body);
    } else if (req.originalUrl === "/api/post/edit") {
      errMsg = validator.postValidator.edit(req.body);
    } else if (req.originalUrl === "/api/post/delete") {
      errMsg = validator.postValidator.delete(req.body);
    }

    const { error } = errMsg;
    if (error) {
      return res
        .status(400)
        .json({ errors: error.details.map((err) => err.message) });
    }

    logger.info("Post Middleware: END");
    next();
  };
};
