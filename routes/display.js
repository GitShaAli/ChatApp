const express = require('express');

const router = express.Router();

const fs = require('fs');

router.get('/showMsg',(req,res,next)=>{
    let data =  fs.readFileSync('./messages.txt');
    res.send(`<h1> ChatRoom</h1>
    <p>${data}</p>
    `);

})
module.exports = router;