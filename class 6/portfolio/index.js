const express = require("express");
const router =  express.Router();

router.get('/portfolio', (req, res) => {
    res.render('portfolio');
    res.end();
})

router.get('/promise', (req, res) => {
    console.log('this is a promise request');
    const p = new Promise((resolve, reject) => {
        console.log("promise inisiated");
        setTimeout(reject, 6000);
    })

    p.then(() => {
        console.log("Promise Completed");
        res.status(200).send({
            message: "Promise Completed"
        })
    }).catch((err) => {
        console.log("somthing went wrong");
        res.status(400).send({
            message: "somthing went wrong"
        })
    })
})

module.exports =  router