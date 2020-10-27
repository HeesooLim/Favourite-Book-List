/*
  Author: Heesoo Lim
  studentID: 301061152
  Date: October 27, 2020
  File Name: books.js
*/

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
