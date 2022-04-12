const formReg = require('../Model/FormInovatorModel')
const express = require('express')

const router = express.Router()



router.get('/form', async(req, res)=>{
try{

    const getData = await formReg.find()

    res.status(200).json(getData)


     
} catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/form', async(req, res)=>{
    try{
        const postForm = await formReg.create({
            title : req.body.title,
            description : req.body.description,
            dateTime : req.body.dateTime,
            tech : req.body.tech,
            migrate : req.body.migrate,
            Url : req.body.Url,
            Challenge : req.body.Challenge,
            BChallenge : req.body.BChallenge,
        })
      res.status(201).json(postForm)
    }catch (error) {
        res.status(500).json({message: error.message})
    }
})










module.exports = router