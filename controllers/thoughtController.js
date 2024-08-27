// /controllers/thoughtController.js
const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought by ID
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) => !thought
        ? res.status(404).json({ message: 'No thought found with that ID' })
        : res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Create a new thought and add it to a user
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) => !user
        ? res.status(404).json({ message: 'Thought created, but found no user with that ID' })
        : res.json('Thought created!'))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought by ID
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) => !thought
        ? res.status(404).json({ message: 'No thought found with that ID' })
        : res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) => !thought
        ? res.status(404).json({ message: 'No thought found with that ID' })
        : res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Add a reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .then((thought) => !thought
        ? res.status(404).json({ message: 'No thought found with that ID' })
        : res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Remove a reaction
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((thought) => !thought
        ? res.status(404).json({ message: 'No thought found with that ID' })
        : res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
};
