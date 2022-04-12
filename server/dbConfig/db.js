const mongoose = require('mongoose')

const url_offline = 'mongodb://localhost/appSubmissionDB'
mongoose.connect(url_offline).then(()=>{
    console.log('connect to database successfully');
})