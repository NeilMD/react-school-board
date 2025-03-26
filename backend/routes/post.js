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
    middleware.postMiddleware,
    controllers.postController.add
  );

  // POST /api/post/edit
  router.post(
    "/edit",
    middleware.postMiddleware,
    controllers.postController.edit
  );

  // POST /api/post/add
  router.post(
    "/delete",
    middleware.postMiddleware,
    controllers.postController.delete
  );

  // POST /api/post/view/all
  router.get("/view/all", controllers.postController.viewAll);

  return router;
};
