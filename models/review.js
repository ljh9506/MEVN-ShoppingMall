const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    photo: {
      type: String,
      default: 'none',
    },
    rating: String,
    writer: { type: Schema.Types.ObjectId, ref: 'User' },
    productID: String,
  },
  { timestamps: { createdAt: 'created_at' } },
);

module.exports = mongoose.model('Review', ReviewSchema);
