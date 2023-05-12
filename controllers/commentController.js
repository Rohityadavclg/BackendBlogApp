//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
exports.createComment = async (req, res) => {
  try {
    //fetch data from body
    const { post, user, body } = req.body;
    const comment = new Comment({
      post,
      user,
      body,
    });
    //save the comment into database
    const savedComment = await comment.save();
    //find the post by ID,add the new comment to its comments array

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },//update post in database
      { new: true }//after updated result will be returned
    )
      .populate("comments") //populate the comments array with comment document
      .exec();
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal error",
      message: error.message,
    });
  }
};
