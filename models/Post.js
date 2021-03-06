const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Saisissez un titre'],
      maxLength: 100
    },
    content: {
      type: String,
      required: [true, 'Saisissez un contenu']
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Saisissez un utilisateur']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
