const mongoose = require('mongoose')


const messages = mongoose.Schema({
  who: {
    type: String
  },
  mes: {
    type: String
  },
    toggle: {
    type: Boolean
  }
});


const RequestReg = mongoose.Schema({
   title : {
       type : String,
       required : true
   },

   description : {
       type : String,
       required : true

   },
    chat: [messages],

    userId : {
        type :String
    },
  
 
}, {timestamps : true})


module.exports = mongoose.model('requests',RequestReg )