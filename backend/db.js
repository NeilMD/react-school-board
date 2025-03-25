module.exports = ({ logger, mongoose, process, asyncHandler }) => {
  return asyncHandler(async () => {
    logger.info(`MongoDB Connect: Start`);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
    logger.info(`MongoDB Connect: END`);
  });
};
