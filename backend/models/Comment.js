const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true }, // Reference to the post
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  markedAsHelpful: { type: Boolean, default: false }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;