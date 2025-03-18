module.exports = ({ logger, util }) => {
  return (req, res, next) => {
    logger.info(`ResBuilder Middleware: START`);
    res.locals.objResult = util.responseUtil();

    logger.info(`ResBuilder Middleware: END`);

    next(); // Ensure next() is called to continue the request flow
  };
};
