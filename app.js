const express = require('express');
const app = express();

app.use( (req, res,next) => {
    console.log('Running');
    next();
});

app.use( (req, res,next) => {
        res.send('<h1>The return of eng paul to web development<h1/>');});
app.listen(3000);
