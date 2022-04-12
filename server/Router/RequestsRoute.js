const requestMod = require('../Model/RequestModel')
const express = require('express')

const router = express.Router()



router.get('/request', async(req, res)=>{
try{
    const getData = await requestMod.find()
    res.status(200).json(getData)
} catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/request', async(req, res)=>{
    try{
        const postForm = await requestMod.create({
            title : req.body.title,
            description : req.body.description,
            userId : req.body.userId,
            chat : req.body.chat
          
          
        })
      res.status(201).json(postForm)
    }catch (error) {
        res.status(500).json({message: error.message})
    }
})


router.post("/request/:id", async (req, res) => {
  try {
    const chat = {
      who: req.body.who,
      mes : req.body.mes,
      toggle: true
    };
    const createMessages = await requestMod.findByIdAndUpdate(
      req.params.id,
      {
        $push: { chat }
      },
      { new: true }
    );

    res.status(201).json({
      message: " created successfully",
      data: createMessages
    });
  } catch (err) {
    res.status(400).json({ message: `Error reading data: ${err.message}` });
  }
});









module.exports = router