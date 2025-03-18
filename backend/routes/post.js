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
  router.post("/edit", middleware.postMiddleware, () => {});

  // POST /api/post/add
  router.post("/delete", () => {});

  return router;
};
