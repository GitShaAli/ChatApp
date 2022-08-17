const express = require('express');
const router = express.Router();


router.get('/loginPage',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login/loginPage" method="POST"><input id="username" type="text" name"title"><button type="submit">Enter</button></form>') ;
})

router.post('/login/loginPage',(req,res,next)=>{
    res.redirect('/msg');
})


module.exports = router;