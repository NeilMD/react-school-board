module.exports = ({ logger }) => {
  return (req, res, next) => {
    logger.info(``);
    logger.info(``);
    logger.info(`REQUEST URL: ${req.originalUrl}`);
    logger.info(`REQUEST METHOD: ${req.method}`);

    next(); // Ensure next() is called to continue the request flow
  };
};
