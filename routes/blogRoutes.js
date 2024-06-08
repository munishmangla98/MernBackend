const express = require('express');
const { getAllBlogs, createBlog } = require('../controllers/blogController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getAllBlogs);
router.post('/', auth, createBlog);

module.exports = router;``
