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
  postController.edit = asyncHandler(async (req, res) => {
    logger.info("postController/edit: START");

    const filter = { _id: req.body._id }; // Find the post by ID
    const update = {
      authorId: req.body.authorId,
      authorType: req.body.authorType,
      postType: req.body.postType,
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
      programs: req.body.programs,
      courses: req.body.courses,
      updatedAt: Date.now(),
    };

    const options = { upsert: false, new: true, setDefaultsOnInsert: true };
    // upsert: true ensures insert if no document found
    // new: true returns the updated document
    // setDefaultsOnInsert ensures that default values are applied on insert

    const result = await Post.findOneAndUpdate(filter, update, options);

    if (result) {
      res.locals.objResult.numCode = 0;
      res.locals.objResult.objData = result;
      res.locals.objResult.objSucess = "Successfully Updated";
    } else {
      res.locals.objResult.numCode = 1;
      res.locals.objResult.objSucess = "Record not found";
    }

    logger.info("postController/edit: END");
    res.status(201).json(res.locals.objResult);
  });
  postController.delete = asyncHandler(async (req, res) => {
    logger.info("postController/delete: START");

    const filter = { _id: req.body._id }; // Find the post by ID
    const result = await Post.deleteOne(filter);

    if (result.deletedCount > 0) {
      res.locals.objResult.numCode = 0;
      res.locals.objResult.objData = result;
      res.locals.objResult.objSucess = "Successfully deleted";
    } else {
      res.locals.objResult.numCode = 1;
      res.locals.objResult.objSucess = "Failed deleting";
    }

    logger.info("postController/delete: END");
    res.status(201).json(res.locals.objResult);
  });
  return postController;
};
