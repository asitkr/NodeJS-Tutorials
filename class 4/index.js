const http = require('http');
const express = require('express');
const app = express();
app.use(express.json())
const server = http.createServer(app);

app.post('/signup', (req, res) => {
    const body = req.body;
    console.log("you have been logged data is : ", body.email, body.name, body.password);
    res.json({
        message: "successfully signed up"
    })
})

app.put('/update-user', (req, res) => {
    console.log("user got upfdated...")
    const body = req.body;
    console.log("The updated body is ", body)
    res.json({
        message: "Successfully updated"
    })
})

app.delete('/delete-user', (req, res) => {
    const body = req.body;
    console.log("Deleting user", body);
    // res.json({
    //     message: "Deleted successfully"
    // })
    res.status(204).json();
})

app.delete('/delete_user', (req, res) => {
    const body = req.body;
    console.log("Deleteing user", body)
    // res.json({
    //     message: " delete successfully"
    // })
    // res.status(204).end();
    res.status(204).json();
})

app.get('/math-table', (req, res) => {
    const tableOf = parseInt(req.query.table_of);
    const tableTill = parseInt(req.query.table_till);
    console.log("query params are", tableOf, tableTill);
    const tableData = [];
    for(let i=1; i<tableTill; i++){
        tableData.push((tableOf + "x" + i + "=" + (tableOf*i)))
    }
    // res.status(200).end();
    res.status(200).json({
        tableOf, tableData
    })
})

server.listen(8080, '127.0.0.1', () => {
    console.log("My Express Js Program");
})