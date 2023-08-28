const express = require('express');
const mongoose = require('mongoose');
const db = require("./config/connections");

const app = express();
const PORT = process.env.PORT || 3000; // Set the port for your server

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require('./routes'); // Import your routes

db.once("open", () => {
    app.use(routes)
    app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
});