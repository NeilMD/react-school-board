const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema({
  authorId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
  authorType: {
    type: String,
    enum: ["student", "alumni", "industry", "others"],
    required: true,
  },
  postType: {
    type: String,
    enum: ["question", "networking", "course_feedback", "announcement"],
    required: true,
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String], // Tags for filtering/searching
  programs: [String], // Relevant programs
  courses: [String], // Relevant courses
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  isResolved: { type: Boolean, default: false }, // For question-type posts
  correctAnswerId: { type: Schema.Types.ObjectId, ref: "Comment" }, // Accepted answer reference
  isPinned: { type: Boolean, default: false }, // Pin important posts
  eventDate: { type: Date }, // For announcements
  isFlagged: { type: Boolean, default: false }, // For admin review
  savedByUsers: [{ type: Schema.Types.ObjectId, ref: "User" }], // Users who saved the post
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
