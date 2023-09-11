const express = require('express');
const path = require('path');
const router = express.Router();
const adminData = require('./Admin');

router.get('/m',(req, res,next) => {
    console.log(adminData.product);
    res.sendFile(path.join(__dirname, '../','views','shop.html'));
    
});
module.exports = router;