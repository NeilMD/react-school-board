module.exports = ({ asyncHandler, logger, models }) => {
  let postController = {};
  let Post = models.Post;

  postController.add = asyncHandler(async (req, res) => {
    logger.info("postController/add: START");

    // Create a new post instance
    const newPost = new Post({
      authorId: req.body.authorId,
      authorType: req.body.authorType,
      postType: req.body.postType,
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
      programs: req.body.programs,
      courses: req.body.courses,
    });

    // Save the post to the database
    const savedPost = await newPost.save();

    if (savedPost === newPost) {
      res.locals.objResult.numCode = 0;
      res.locals.objResult.objData = savedPost;
      res.locals.objResult.objSucess = "Successfully Posted";
    } else {
      res.locals.objResult.numCode = 1;
      res.locals.objResult.objError = "Error in Posting";
    }
    logger.info("postController/add: END");
    res.status(201).json(res.locals.objResult);
  });
  postController.edit = asyncHandler((req, res) => {});
  postController.delete = asyncHandler((req, res) => {});
  return postController;
};
