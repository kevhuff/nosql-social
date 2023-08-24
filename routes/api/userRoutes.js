const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController'); // Import the users controller

// Route to get all users
router.get('/', usersController.getAllUsers);

// Route to get a single user by its _id
router.get('/:userId', usersController.getUserById);

// Route to create a new user
router.post('/', usersController.createUser);

// Route to update a user by its _id
router.put('/:userId', usersController.updateUserById);
// Route to delete a user by its _id
router.delete('/:userId', usersController.deleteUserById);

module.exports = router;
