//console.log('chai aur code');

require('dotenv').config()  
const express = require('express')
//import express from 'express'   //same same but difflent

const app = express()

const port = 4000

app.get('/',(req,res)=>{
    res.send("Hello world!")
})

app.get('/twitter',(req,res)=>{
    res.send("this is twitter page")
})

app.get('/login',(req,res)=>{
    res.send(`<h1>login page<h1>` )
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${process.env.PORT}`);
})

// app.listen(port,()=>{
//     console.log(`example app listening on port ${port}`);
// })