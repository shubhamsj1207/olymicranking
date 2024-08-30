const express = require('express');
const routercustomer = new express.Router();
const savecustomer = require("../controller/customer");
routercustomer.post("/addCustomer",async(req,res)=>{


     // if(req.body.firstname == "" || req.body.firstname == " ") {
       //      res.status(403).send('kindly enter firstname');
       // }
        //   if(req.body.lastname == "" || req.body.lastname == " ") {
        //       res.status(403).send('plezz enter your last name correctly');
        //  }
    //      if(req.body.dob == "" || req.body.dob == " ") {
    //         res.status(403).send('plezz enter legal dob');
    //     }
      //  if(req.body.accountno == "" ||  typeof req.body.accountno == String) {
        //    res.status(403).send('plezz give valid accountno');
        //}
    //     console.log(req.body.mobileno);
    //     console.log(req.body.mobileno.length);
    //    if(req.body.mobileno == "" || req.body.mobileno.length < 10 ) {
    //         res.status(403).send('kindly enter your mobileno');
    //      }
    //     if(req.body.email== "" ||  typeof req.body.email == " ") {
    //         res.status(403).send('plezz enter your right email');
    //     }

    
// const schema = Joi.object().keys({ 
//     lastname: Joi.string().alphanum().min(3).max(30).required(),
//     mobileno: Joi.number().integer().min(10).max(10), 
// }); 
// const result =  customerAddschema.validate(req.body); 
const result = customervalidate(req.body);
console.log(result.error);


if (result.error) {
    res.status(406).send(`Error in User Data : ${result.error.message}`);
}
    
    try{

        // if(req.body.lastname == "" || req.body.lastname == " ") {
        // throw new Error('kindly add name');
        // }       
        console.log(req.body);
        const response = await savecustomer(req.body);
        console.log(response);
        res.status(201).send(response);
    }catch(e){
        // console.log(e);
        // console.log(e?.message);
        res.status(500).send(e?.message);
    }
})

module.exports = routercustomer;