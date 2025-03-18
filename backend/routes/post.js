module.exports = ({ logger, router, middleware, asyncHandler }) => {
  // POST /api/post/add
  router.post(
    "/add",
    middleware.postMiddleware,
    asyncHandler((req, res) => {
      logger.info("POST START");
      logger.info("POST END");
      res.status(200).json({ message: "Post Added Successfully" });
    })
  );

  // POST /api/post/edit
  router.post("/edit", middleware.postMiddleware, () => {});

  // POST /api/post/add
  router.post("/delete", () => {});

  return router;
};
