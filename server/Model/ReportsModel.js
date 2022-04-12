const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InovateReg = new Schema({
   title : {
       type : String,
       required : true
   },

   description : {
       type : String,
       required : true

   },
    dateR: {
       type : String,
       required : true,
     

   },
   recommendation : {
       type : String,
       required : true

   },
   conclusion : {
       type : String,
       required : true

   },
   chal : {
       type : String,
       required : true
   },

   userID : {
       type : String
   },
}, {timestamps : true})


module.exports = mongoose.model('reports',InovateReg )