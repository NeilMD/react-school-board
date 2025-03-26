module.exports = ({ asyncHandler, logger, models }) => {
  let commentController = {};
  let Comment = models.Comment;

  commentController.getComments = asyncHandler(async (req, res) => {
    logger.info("commentController/getComments: START");

    // Create a new Comment instance
    const comments = await Comment.find({ postId: req.body.postId });

    if (comments.length > 0) {
      res.locals.objResult.numCode = 0;
      res.locals.objResult.objData = comments;
      res.locals.objResult.objSuccess = "Comments fetched successfully";
    } else {
      res.locals.objResult.numCode = 1;
      res.locals.objResult.objError = "No comments found for this post";
    }
    logger.info("commentController/getComments: END");
    res.status(201).json(res.locals.objResult);
  });

  commentController.add = asyncHandler(async (req, res) => {
    logger.info("commentController/add: START");

    // Create a new Comment instance
    const newComment = new Comment({
      postId: req.body.postId,
      userId: req.body.userId,
      content: req.body.content,
    });

    // Save the Comment to the database
    const savedComment = await newComment.save();

    if (savedComment === newComment) {
      res.locals.objResult.numCode = 0;
      res.locals.objResult.objData = savedComment;
      res.locals.objResult.objSucess = "Successfully Commented";
    } else {
      res.locals.objResult.numCode = 1;
      res.locals.objResult.objError = "Error in Commenting";
    }
    logger.info("commentController/add: END");
    res.status(201).json(res.locals.objResult);
  });
  commentController.edit = asyncHandler(async (req, res) => {
    logger.info("commentController/edit: START");

    const filter = { _id: req.body._id }; // Find the Comment by ID
    const update = {
      postId: req.body.postId,
      userId: req.body.userId,
      content: req.body.content,
      updatedAt: Date.now(),
    };

    const options = { upsert: false, new: true, setDefaultsOnInsert: true };
    // upsert: true ensures insert if no document found
    // new: true returns the updated document
    // setDefaultsOnInsert ensures that default values are applied on insert

    const result = await Comment.findOneAndUpdate(filter, update, options);

    if (result) {
      res.locals.objResult.numCode = 0;
      res.locals.objResult.objData = result;
      res.locals.objResult.objSucess = "Successfully Updated";
    } else {
      res.locals.objResult.numCode = 1;
      res.locals.objResult.objSucess = "Record not found";
    }

    logger.info("commentController/edit: END");
    res.status(201).json(res.locals.objResult);
  });
  commentController.delete = asyncHandler(async (req, res) => {
    logger.info("commentController/delete: START");

    const filter = { _id: req.body._id }; // Find the Comment by ID
    const result = await Comment.deleteOne(filter);

    if (result.deletedCount > 0) {
      res.locals.objResult.numCode = 0;
      res.locals.objResult.objData = result;
      res.locals.objResult.objSucess = "Successfully deleted";
    } else {
      res.locals.objResult.numCode = 1;
      res.locals.objResult.objSucess = "Failed deleting";
    }

    logger.info("commentController/delete: END");
    res.status(201).json(res.locals.objResult);
  });
  return commentController;
};
