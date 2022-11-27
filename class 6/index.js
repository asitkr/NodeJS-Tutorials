const express = require("express");
const app = express();
// const homeRouter = express.Router();
// const portfolioRouter = express.Router();
 
app.set('views', './views');
app.set('view engine', 'ejs')

// app.get('/home', (req, res) => {
//     res.render('home');
//     res.end();
// })

//using router
// homeRouter.get('/home', (req, res) => {
//     res.render('home');
//     res.end();
// })

// portfolioRouter.get('/portfolio', (req, res) => {
//     res.render('portfolio');
//     res.end();
// })

app.use('/', require('./home/index'))
app.use('/', require('./portfolio/index'))

// app.use(homeRouter);
// app.use(portfolioRouter);

// app.get('/portfolio', (req, res) => {
//     res.render('portfolio');
//     res.end();
// })


app.listen(8080, (err) => {
    if(err) {
        console.log("Error ", err);
    }
    else {
        console.log("Server is up: ");
    }
})