 const express=require('express');
const router=express.Router();
const {dummylink,likePost,unlikePost}=require('../controllers/likeController');
const {createComment}=require("../controllers/commentController");
const {createPost,getAllPost}=require("../controllers/postController");

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/dummyroute",dummylink);
router.get("/posts",getAllPost);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
module.exports=router;