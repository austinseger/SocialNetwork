// models/index.js
const User = require('./User');   // Require the User model from the same directory
const Thought = require('./Thought');  // Require the Thought model from the same directory

module.exports = { User, Thought };  // Export both models for easy access
