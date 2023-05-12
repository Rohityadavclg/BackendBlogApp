const express=require("express");
const app = express();
require("dotenv").config();
const PORT=process.env.PORT||4000;
//middleware
app.use(express.json());
const blog=require("./routes/blog");
//mount express
app.use("/api/v1",blog);
 
const dbconnect=require("./config/database");
dbconnect();
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
})
app.get("/",(req,res)=>{
 res.send("<h1>ths is home page</h1>")
});
