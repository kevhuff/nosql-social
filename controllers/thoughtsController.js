const {Thought , User} = require('./models')

const thoughtsController = {
    // get all thoughts
    getAllThoughts: async (req, res) => {
        try {
          const thoughts = await Thought.find().sort({ createdAt: -1 });
          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    
      // Get a single thought by its _id
      getThoughtById: async (req, res) => {
        try {
          const thought = await Thought.findById(req.params.thoughtId);
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    
      // Create a new thought
      createThought: async (req, res) => {
        try {
          const thought = await Thought.create(req.body);
          const user = await User.findById(thought.userId);
          user.thoughts.push(thought._id);
          await user.save();
          res.json(thought);
        } catch (err) {
          res.status(400).json(err);
        }
      },
    
      // Update a thought by its _id
      updateThought: async (req, res) => {
        try {
          const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            req.body,
            { new: true }
          );
          res.json(thought);
        } catch (err) {
          res.status(400).json(err);
        }
      },
    
      // Delete a thought by its _id
      deleteThought: async (req, res) => {
        try {
          const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
          const user = await User.findById(thought.userId);
          user.thoughts.pull(thought._id);
          await user.save();
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    };
    
    module.exports = thoughtsController;