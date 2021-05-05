const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema({
    subject:{
        type:String
    },
    title:{
        type:String
    },
    date:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});

const Blogpost = mongoose.model('Blogpost',blogpostSchema);

module.exports = Blogpost;