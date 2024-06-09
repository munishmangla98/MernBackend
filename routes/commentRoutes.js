const express = require('express');
const {
  addComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');
const  auth  = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/blogs/:id/comments', auth, addComment);
router.put('/blogs/:blogId/comments/:commentId', auth, updateComment);
router.delete('/blogs/:blogId/comments/:commentId', auth, deleteComment);

module.exports = router;
