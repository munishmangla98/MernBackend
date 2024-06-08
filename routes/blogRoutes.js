const express = require('express');
const { getAllBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Get all blogs
router.get('/', auth, getAllBlogs);

// Create a new blog
router.post('/', auth, createBlog);

// Update a blog
router.put('/:id', auth, updateBlog);

// Delete a blog
router.delete('/:id', auth, deleteBlog);

module.exports = router; ``
