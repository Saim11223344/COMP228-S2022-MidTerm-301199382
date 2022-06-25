// 
//   file name: Book Model
//   Student name: Saim Ali
//   Student number: 301199382
//   Date : 23-06-2022  
//   Web App name: COMP229-S2022-MidTerm-301199382
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
