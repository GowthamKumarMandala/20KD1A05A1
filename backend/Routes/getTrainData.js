const axios = require("axios");

const router = require('express').Router();



router.route('/').get((req,res)=>{
    const headers = {authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIxOTg5MTMsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiZmIxOWIxMGEtYWVhMC00MmI1LWI2ZGUtNGM3MmZmZjIzMmFjIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwS0QxQTA1QTEifQ.vsSyHDADpqW4BxdfwfZtGw2a9BVGs-RYOPFjQgDFy_w"}
    const url = "http://20.244.56.144/train/trains"
    const data = axios.get(url,{headers})
    .then((result)=>res.json(result.data))
    .catch((err)=> console.log("error"));
   ;
});


module.exports = router