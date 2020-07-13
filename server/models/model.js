const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlScheme = new Schema({
    url:{
        type:String,
        required:true
    },
    shortUrl:{
        unique:true,
        type:String,
        required:true
    }
},{
    timestamps:true
})

const URL = mongoose.model('URLShortener',urlScheme);

module.exports = URL;