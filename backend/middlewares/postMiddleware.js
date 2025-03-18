module.exports = ({ logger, validator }) => {
  return (req, res, next) => {
    logger.info("Post Middleware: START");
    const { error } = validator.postValidator.add(req.body);
    if (error) {
      return res
        .status(400)
        .json({ errors: error.details.map((err) => err.message) });
    }

    logger.info("Post Middleware: END");
    next();
  };
};
