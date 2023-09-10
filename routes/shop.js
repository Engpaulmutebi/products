const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/m',(req, res,next) => {
    console.log('Running');
    res.sendFile(path.join(__dirname, '../','views','shop.html'));
    
});
 module.exports = router