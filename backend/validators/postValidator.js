module.exports = ({ logger, joi }) => {
  let postValidation = {};

  postValidation.add = (postData) => {
    logger.info("postValidation/add : START");
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

      eventDate: joi.date().when("postType", {
        is: "announcement",
        then: joi.required(),
        otherwise: joi.forbidden(), // Only allow eventDate for 'announcement'
      }),
    });

    logger.info("postValidation/add: END");
    return postValidationSchema.validate(postData);
  };

  postValidation.edit = (postData) => {
    logger.info("postValidation/edit : START");
    // joi Validation Schema for Post
    const postValidationSchema = joi.object({
      _id: joi
        .string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
          "string.pattern.base": "Invalid ObjectId format for _id.",
        }),
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

      eventDate: joi.date().when("postType", {
        is: "announcement",
        then: joi.required(),
        otherwise: joi.forbidden(), // Only allow eventDate for 'announcement'
      }),
    });

    logger.info("postValidation/edit: END");
    return postValidationSchema.validate(postData);
  };

  postValidation.delete = (postData) => {
    logger.info("postValidation/delete : START");
    // joi Validation Schema for Post
    const postValidationSchema = joi.object({
      _id: joi
        .string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
          "string.pattern.base": "Invalid ObjectId format for _id.",
        }),
    });

    logger.info("postValidation/delete: END");
    return postValidationSchema.validate(postData);
  };

  return postValidation;
};
