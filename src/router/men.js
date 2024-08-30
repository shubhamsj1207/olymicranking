const express = require('express');
const MensRanking = require('../models/mens');
const router = new express.Router();



router.get("/",async(req,res)=>{
    res.send('hello from the shubham')
});

//we will create a post method 
router.post("/addMenRecords",async(req,res)=>{
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens= await addingMensRecords.save();
        res.status(201).send('record added successfully')
    }catch(e){
      res.status(500).send(e);
    }

})



//we will create a get mothod
router.get("/getMens",async(req,res)=>{
    try{
        const getMens= await MensRanking.find({}).sort({"ranking":1});
     res.send(getMens)
    }catch(e){
      res.status(400).send(e);
    }

})

//we will handle get req of indiviual
router.get("/getMens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen= await MensRanking.find({_id});
     res.send(getMen)
    }catch(e){
      res.status(400).send(e);
    }

})


router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen= await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
     res.send(getMen)
    }catch(e){
      res.status(5000).send(e);
    }

})

//delte api
router.delete("/deletMens/:id",async(req,res)=>{
    try{
        const getMen= await MensRanking.findByIdAndDelete(req.params.id)
        res.send(getMen)
    } catch(e){
        res.status(5000).send(e);
    }

})

router.put("/mens/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen= await MensRanking.findByIdAndUpdate(_id, req.body,{
            new:true
        });
     res.send(getMen)
    }catch(e){
      res.status(5000).send(e);
    }

})

module.exports=router;