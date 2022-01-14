const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

const Blogdb = mongoose.model('blogdb',schema);

module.exports = Blogdb;