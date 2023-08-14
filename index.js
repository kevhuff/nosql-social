const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port for your server

// Middleware
app.use(express.json());

// // Connect to MongoDB using Mongoose
// mongoose.connect('mongodb://localhost:27017/social_network', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

// Import your route files
const thoughtsRoutes = require('./routes/api/thoughts'); // Import the thoughts routes
const usersRoutes = require('./routes/api/users'); // Import the users routes
const { db } = require('./models/Thought');

// Use the route files
app.use('/api/thoughts', thoughtsRoutes);
app.use('/api/users', usersRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }
  );
});
