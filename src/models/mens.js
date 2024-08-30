const express = require('express');
const { default: mongoose } = require('mongoose');

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{        
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100 m "
    }
});

const coustmerschema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{        
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    accountno:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    mobileno:{
        type:Number,
        required:true,
        trim:true
    }
});

//we are creating a new collection
const MensRanking = new mongoose.model("MenRanking",menSchema)
module.exports=MensRanking;

const coustmersdata= new mongoose.model("coustmerdata",coustmerschema);
module.exports=coustmersdata;