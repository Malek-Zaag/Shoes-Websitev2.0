const mongoose = require('mongoose'); 
const Schema = mongoose.Schema

const blogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    body: {
    type: String,
    required: true
    }

}, { timestamps: true});


const Blog=mongoose.model('blogs',blogSchema);

module.exports=Blog;