const express = require('express');
const router = express.Router();

router.get('/m',(req, res,next) => {
    console.log('Running');
    res.send('This is the introduction to express');
    
});
 module.exports = router