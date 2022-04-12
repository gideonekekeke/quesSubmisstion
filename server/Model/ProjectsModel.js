const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProjectMod = new Schema({
   title : {
       type : String,
    //    required : true
   },

   description : {
       type : String,
    //    required : true

   },
  
   assignInovator : {
       type : String,
    //    required : true

   },
   assignBdm : {
       type : String,
    //    required : true

   },
  
}, {timestamps : true})


module.exports = mongoose.model('projectUpload',ProjectMod )