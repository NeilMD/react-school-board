module.exports = ({
  logger,
  router,
  middleware,
  asyncHandler,
  controllers,
}) => {
  // POST /api/post/add
  router.post(
    "/add",
    middleware.commentMiddleware,
    controllers.commentController.add
  );

  // POST /api/post/edit
  router.post(
    "/edit",
    middleware.commentMiddleware,
    controllers.commentController.edit
  );

  // POST /api/post/add
  router.post(
    "/delete",
    middleware.commentMiddleware,
    controllers.commentController.delete
  );

  // POST /api/post/getComments
  router.post(
    "/getComments",
    middleware.commentMiddleware,
    controllers.commentController.getComments
  );
  return router;
};
