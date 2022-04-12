const proj = require('../Model/ProjectsModel')
const express = require('express')

const router = express.Router()



router.get('/project', async(req, res)=>{
try{

    const getData = await proj.find()

    res.status(200).json(getData)


     
} catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/project', async(req, res)=>{
    try{
        const postForm = await proj.create({
            title : req.body.title,
            description : req.body.description,
            assignInovator : req.body.assignInovator,
            assignBdm : req.body.assignBdm,
         
        })
      res.status(201).json(postForm)
    }catch (error) {
        res.status(500).json({message: error.message})
    }
})










module.exports = router