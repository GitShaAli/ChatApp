

const express = require('express');

const router = express.Router();


const fs = require('fs');


router.get('/msg',(req,res,next)=>{
    res.send(`<h1> Message Page</h1>
    <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/messages/msg" method = "POST">
    <input type="text" name="msg">
    <input type="hidden" name="username" id="username">
    <button type="submit">Send Message</button></form>
    `) ;
})

router.post('/messages/msg',(req,res,next)=>{
    fs.writeFileSync("messages.txt",`${req.body.username} :  ${req.body.msg}`);
    console.log(`${req.body.username} :  ${req.body.msg}`);
    res.redirect('/showMsg');
})

module.exports = router;