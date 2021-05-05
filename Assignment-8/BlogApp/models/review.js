const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    name:{
        
        type:String,
        required:true
    },
    comment:{

        type:String,
        required:true

    }
})

const Review = new mongoose.model('Review',reviewSchema);

module.exports = Review;