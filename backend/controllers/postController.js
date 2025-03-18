module.exports = ({ asyncHandler, logger, postMiddleware }) => {
  let postController = {};

  postController.add = asyncHandler((req, res) => {});
  postController.edit = asyncHandler((req, res) => {});
  postController.delete = asyncHandler((req, res) => {});
  return postController;
};
