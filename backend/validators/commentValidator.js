module.exports = ({ logger, joi }) => {
  let commentValidation = {};

  commentValidation.add = (postData) => {
    logger.info("commentValidation/add : START");
    // joi Validation Schema for Post
    const commentValidationSchema = joi.object({
      postId: joi
        .string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
          "string.pattern.base": "Invalid ObjectId format for postId.",
          "any.required": "postId is required.",
        }), // Validate postId as ObjectId

      userId: joi
        .string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
          "string.pattern.base": "Invalid ObjectId format for userId.",
          "any.required": "userId is required.",
        }), // Validate userId as ObjectId

      content: joi.string().min(1).required().messages({
        "string.empty": "Content cannot be empty.",
        "any.required": "Content is required.",
      }),
    });

    logger.info("commentValidation/add: END");
    return commentValidationSchema.validate(postData);
  };

  commentValidation.edit = (postData) => {
    logger.info("commentValidation/edit : START");
    // joi Validation Schema for Post
    const commentValidationSchema = joi.object({
      _id: joi
        .string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
          "string.pattern.base": "Invalid ObjectId format for _id.",
        }),
      postId: joi
        .string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
          "string.pattern.base": "Invalid ObjectId format for postId.",
          "any.required": "postId is required.",
        }), // Validate postId as ObjectId

      userId: joi
        .string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
          "string.pattern.base": "Invalid ObjectId format for userId.",
          "any.required": "userId is required.",
        }), // Validate userId as ObjectId

      content: joi.string().min(1).required().messages({
        "string.empty": "Content cannot be empty.",
        "any.required": "Content is required.",
      }),
    });

    logger.info("commentValidation/edit: END");
    return commentValidationSchema.validate(postData);
  };

  commentValidation.delete = (postData) => {
    logger.info("commentValidation/delete : START");
    // joi Validation Schema for Post
    const commentValidationSchema = joi.object({
      _id: joi
        .string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
          "string.pattern.base": "Invalid ObjectId format for _id.",
        }),
    });

    logger.info("commentValidation/delete: END");
    return commentValidationSchema.validate(postData);
  };

  return commentValidation;
};
