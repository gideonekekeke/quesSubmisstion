const formReg = require('../Model/ReportsModel')
const express = require('express')

const router = express.Router()



router.get('/report', async(req, res)=>{
try{
    const getData = await formReg.find()
    res.status(200).json(getData)
} catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/report', async(req, res)=>{
    try{
        const postForm = await formReg.create({
            title : req.body.title,
            description : req.body.description,
            dateR : req.body.dateR,
            recommendation : req.body.recommendation,
            conclusion : req.body.conclusion,
            chal : req.body.chal,
            userID : req.body.userID
          
        })
      res.status(201).json(postForm)
    }catch (error) {
        res.status(500).json({message: error.message})
    }
})










module.exports = router