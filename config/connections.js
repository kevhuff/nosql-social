// require mongoose
const mongoose = require('mongoose');
// set up promises with mongoose
//mongoose.set("strictQuery", true);

// connect to local MongoDB database
//process.env.MONGODB_URI || "mongodb://localhost:27017/yourDBname",
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/yourDBname");
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost:27017/yourDBname",
//   { useNewUrlParser: true, 
//     useUnifiedTopology: true }
// );

// export mongoose connection
module.exports = mongoose.connection;
