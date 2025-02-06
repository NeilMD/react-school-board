const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModerationSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  adminId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  actionTaken: { type: String, enum: ['warning', 'delete', 'no action'], required: true },
  reason: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Moderation = mongoose.model('Moderation', ModerationSchema);

module.exports = Moderation;