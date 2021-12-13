const mongoose=require('mongoose');
const videoSchema=new mongoose.Schema({
    title:String,
    url: String,
    description:String
}, {collection: 'video'});
module.exports=mongoose.model('videos',videoSchema)