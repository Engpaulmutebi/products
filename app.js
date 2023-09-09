const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended:false })); 
app.use('/m',(req, res,next) => {
    console.log('Running');
    res.send('This is the introduction to express');
    
});
app.use('/add-product', (req, res,next) => {
    res.send('<form method="POST" action="/product"><input type="text" name="title" ><button type="subit">AddProduct</button></form>');
});

app.use('/product', (req, res,next) => {
    console.log(req.body);
    res.redirect('/m');
});
app.listen(3000);
