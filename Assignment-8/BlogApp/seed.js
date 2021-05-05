const mongoose = require('mongoose');
const blogpost = require('./models/blogpost');

const posts = [
    {   subject:"Tech",
        title:'iPhone',
        date:"5 May 21",
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image:'https://images.unsplash.com/photo-1570273282451-b22438331ba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {   subject:"Tech",
        title:'laptop',
        date:"5 May 21",
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGFzdXMlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {   subject:"Gadget",
        title:'headphone',
        date:"5 May 21",
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {   subject:"World",
        title:'Speaker',
        date:"5 May 21",
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image:'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BlYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {   subject:"Product",
        title:'Shoes',
        date:"5 May 21",
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {   subject:"Tech",
        title:'Printer',
        date:"5 May 21",
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image:'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJpbnRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

const seedDb = async ()=>{
    await blogpost.insertMany(posts);
    console.log('db seeded');
}

module.exports = seedDb;