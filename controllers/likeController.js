const express = require("express");
const Post = require("../models/postModel");
const Like = require("../models/likeModel");
//like a post

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { like: savedLike._id } },
      { new: true }
    );
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while liking the post",
    });
  }
};
exports.unlikePost = async (req,res)=>{
  try {
    const{post,like}=req.body;
    //find and delete in the collection
    const deleteLike=await Like.findOneAndDelete({
        post: post,
        _id:like,
    });
    //update the post collection
   
    const updatedPost=await Post.findByIdAndDelete(post,{$pull:{likes:deleteLike._id}},{new:true});
     res.json({
        post: updatedPost,
     })
} catch (error) {
    
  }  
}
exports.dummylink = (req, res) => {
  res.send("<h1>this is a dummy link</h1>");
};
