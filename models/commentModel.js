//import mongoose
const mongoose = require("mongoose");
//route handlers
const commentSchema= new mongoose.Schema({
post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post"//refering to the pos model for

},
user:{
  type:String,
  required:true,  
},
body:{
    type:String,
    required:true,
}
});
//export
module.exports=mongoose.model("Comment",commentSchema)