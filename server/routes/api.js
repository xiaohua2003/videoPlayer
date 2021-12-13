const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const videos=require('../models/videos')
dotenv.config()
const DB=process.env.dataBase.replace('<password>', process.env.passWord)
mongoose.connect(DB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const router=express.Router();
//get all videos
router.get('/videos', async(req, res)=>{
    const data=await videos.find({})
    console.log(data);
    try{
        res.send(data)
    }catch(error){
        res.status(500).send(error);
    }
   
});
//get single video
router.get('/videos/:id', async(req,res)=>{
let Id=req.params.id 
const video_one=await videos.findById(Id);
console.log(video_one)
try{
  res.send(video_one)
}catch(error){
  res.status(500).send(error);
}

})
//add a new video
// router.post('/video', async(req, res)=>{
//   const newVideo=new videos(req.body)
//   try{
//     await newVideo.save();
//     res.send(newVideo)
//   }catch(error){
//     res.status(500).send(error)
//   }
// })
router.post('/video', async(req, res)=>{
  try{
    const newVideo=await videos.create(req.body)
    res.status(200).send(newVideo)
  }catch(error){
    res.status(500).send(newVideo)
  }
})
//update a video
router.patch('/videos/:id', async(req, res)=>{
  try{
    const updatedVideo=await videos.findByIdAndUpdate(req.params.id, req.body, {
      new:true  
    });
    res.status(200).send(updatedVideo);
    console.log(updatedVideo);
    
  }catch(error){
    res.status(500).send(error)
  }
  
})

//delete a video
router.delete('/videos/:id', async(req,res)=>{
  try{
    await videos.findByIdAndDelete(req.params.id)
    res.status(200).send('delete success')
  }catch(error){
    res.status(500).send(error)
  }
})

module.exports=router;