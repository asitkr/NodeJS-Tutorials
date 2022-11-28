const express = require("express");
const mongoose = require("mongoose");

const app = express();
const url="mongodb://localhost:27017/cortana_db";

mongoose.connect(url).then((value) => {
    console.log("SuccessFully Connected to MongoDB");
}).catch((err) => {
    console.log("error is: --- ", err);
})

const PORT = 8005;

app.listen(PORT, (err) => {
    if(err) {
        console.log("Error is Port : ", err);
    }

    console.log("connected to server PORT: - " + PORT);
})