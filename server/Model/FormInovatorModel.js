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
   dateTime : {
       type : String,
       required : true,
     

   },
   tech : {
       type : String,
           required : true,
    

   },
   migrate : {
       type : String,
           required : true,
    

   },
   Url : {
       type : String,
           required : true,
    

   },
   Challenge : {
       type : String,
           required : true,
    

   },
   BChallenge : {
       type : String,
           required : true,
    

   },
}, {timestamps : true})


module.exports = mongoose.model('inovateform',InovateReg )