const mongoose = require('mongoose');

// Define the Reaction subdocument schema
const reactionSchema = new mongoose.Schema({
  // Unique identifier for each reaction
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId() // Generate a new ObjectId by default
  },
  // Body of the reaction
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280 // Limit the length of the reaction body to 280 characters
  },
  // Username of the user who created the reaction
  username: {
    type: String,
    required: true
  },
  // Timestamp when the reaction was created
  createdAt: {
    type: Date,
    default: Date.now, // Use the current timestamp as the default value
    get: timestamp => formatDate(timestamp) // Use a function to format the timestamp (implement this function)
  }
});

module.exports = reactionSchema;
