const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port for your server
const routes = require('./routes'); // Import your routes
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));