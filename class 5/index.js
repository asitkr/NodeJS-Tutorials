const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(log);
app.use(cookieParser());
// app.use(validatePhone);

app.post('/login', validatePhone, (req, res) => {
    const body = req.body;
    console.log("I got this data : ", body);
    console.log("signed up");
    res.cookie("secret_code", '123456');
    res.json({
        message: "Successfully signed up"
    })
})

app.get('/login', (req, res) => {
    const cookie = req.cookies;
    console.log('cookies is ', cookie);
    if(cookie.secret_code) {
        res.status(200).send({
            message: "Succedssfully sent"
        })
    }
    else {
        res.status(400).send({
            message: "something went wrong"
        })
    }
})

function validatePhone(req, res, next) {
    const body = req.body;
    if(!body.phoneNumber) {
        throw new Error("Phone number not avilable");
    }
    next();
}
function log(req, res, next) {
    console.log("Path : ", req.path, " Body :", req.body, " Header : ", req.headers);
    next();
}

server.listen(8080,'127.0.0.1', () => {
    console.log("Server is up");
})