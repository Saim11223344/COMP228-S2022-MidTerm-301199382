// 
//   file name: Index Route
//   Student name: Saim Ali
//   Student number: 301199382
//   Date : 23-06-2022  
//   Web App name: COMP229-S2022-MidTerm-301199382

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
