const express = require("express");
const router =  express.Router();

router.get('/home', (req, res)=>{
    res.render('home')
    res.end()
})

module.exports = router