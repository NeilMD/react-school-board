module.exports = ({ router, logger }) => {
  // POST /api/post/add
  router.post("/add", () => {
    logger.info(`Comment Route START`);
  });

  // POST /api/post/edit
  router.post("/edit", () => {});

  // POST /api/post/add
  router.post("/delete", () => {});

  return router;
};
