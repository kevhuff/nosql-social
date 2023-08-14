const express = require('express');
const router = express.Router();
const thoughtsController = require('../controllers/thoughtsController'); // Import the thoughts controller

// Route to get all thoughts
router.get('/', thoughtsController.getAllThoughts);

// Route to get a single thought by its _id
router.get('/:thoughtId', thoughtsController.getThoughtById);

// Route to create a new thought
router.post('/', thoughtsController.createThought);

// Route to update a thought by its _id
router.put('/:thoughtId', thoughtsController.updateThought);

// Route to delete a thought by its _id
router.delete('/:thoughtId', thoughtsController.deleteThought);

module.exports = router;
