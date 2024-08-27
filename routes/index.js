// routes/index.js
const router = require('express').Router();
const userRoutes = require('./userRoutes');  // Path to user routes (from routes folder)
const thoughtRoutes = require('./thoughtRoutes');  // Path to thought routes (from routes folder)

router.use('/users', userRoutes);   // Mount user routes
router.use('/thoughts', thoughtRoutes);  // Mount thought routes

module.exports = router;
