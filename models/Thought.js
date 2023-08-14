const mongoose = require('mongoose');
const formatDate = require('./formatDate'); // Import the formatDate function

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => formatDate(timestamp) // Use the formatDate function to format timestamps
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema] // Define the Reaction schema here
});

// Create a virtual field to calculate reaction count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
