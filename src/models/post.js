import mongoose from 'mongoose'


 const {Schema} = mongoose

 const postSchema = new Schema({
    title:{
        
        type: String,
         required: true,
    },
    desc:{
        
        type: String,
         required: true,
    },
    img:{
        
        type: String,
        unique: true,
         required: true,
    },
    content:{
        
        type: String,
        unique: true,
         required: true,
    },
    username:{
        
        type: String,
        unique: true,
         required: true,
    },
 }, {
    timestamps: true
 })
 //mongoose.models = {}

 export default mongoose.models.posts || mongoose.model("posts", postSchema)