const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res,next) => {
    res.send('<form method="POST" action="/product"><input type="text" name="title" ><button type="subit">AddProduct</button></form>');
});

router.post('/product', (req, res,next) => {
    console.log(req.body);
    res.redirect('/m');
});
 module.exports = router