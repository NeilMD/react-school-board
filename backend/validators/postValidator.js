module.exports = ({ logger, joi }) => {
  let postValidation = {};

  postValidation.add = (postData) => {
    logger.info("Post Validation: START");
    // joi Validation Schema for Post
    const postValidationSchema = joi.object({
      authorId: joi
        .string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
          "string.pattern.base": "Invalid ObjectId format for authorId.",
        }),
      authorType: joi
        .string()
        .valid("student", "alumni", "industry", "others")
        .required(),
      postType: joi
        .string()
        .valid("question", "networking", "course_feedback", "announcement")
        .required(),
      title: joi.string().min(3).max(100).required(),
      content: joi.string().min(10).required(),
      tags: joi.array().items(joi.string().min(1)),
      programs: joi.array().items(joi.string().min(1)),
      courses: joi.array().items(joi.string().min(1)),
      comments: joi.array().items(
        joi.object({
          commentId: joi
            .string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .messages({
              "string.pattern.base": "Invalid ObjectId format for commentId.",
            }),
          userId: joi
            .string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .messages({
              "string.pattern.base": "Invalid ObjectId format for userId.",
            }),
          content: joi.string().min(1).required(),
          createdAt: joi.date().default(Date.now),
          markedAsHelpful: joi.boolean().default(false),
        })
      ),
      upvotes: joi.number().integer().min(0).default(0),
      downvotes: joi.number().integer().min(0).default(0),
      views: joi.number().integer().min(0).default(0),
      isResolved: joi.boolean().default(false),
      correctAnswerId: joi
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .allow(null)
        .optional(),
      isPinned: joi.boolean().default(false),
      eventDate: joi.date().when("postType", {
        is: "announcement",
        then: joi.required(),
        otherwise: joi.forbidden(), // Only allow eventDate for 'announcement'
      }),
      isFlagged: joi.boolean().default(false),
      savedByUsers: joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)),
    });

    logger.info("Post Validation: END");
    return postValidationSchema.validate(postData);
  };

  return postValidation;
};
