module.exports = ({ logger, validator }) => {
  return (req, res, next) => {
    logger.info("Comment Middleware: START");

    let errMsg = null;
    if (req.originalUrl === "/api/comment/add") {
      errMsg = validator.commentValidator.add(req.body);
    } else if (req.originalUrl === "/api/comment/edit") {
      errMsg = validator.commentValidator.edit(req.body);
    } else if (req.originalUrl === "/api/comment/delete") {
      errMsg = validator.commentValidator.delete(req.body);
    } else if (req.originalUrl === "/api/comment/getComments") {
      errMsg = validator.commentValidator.getComments(req.body);
    }

    const { error } = errMsg;
    if (error) {
      return res
        .status(400)
        .json({ errors: error.details.map((err) => err.message) });
    }

    logger.info("Comment Middleware: END");
    next();
  };
};
