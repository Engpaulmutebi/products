const express = require('express');
const app = express();
app.use('/', (req, res) => {console.log('Running')});


app.listen(3000);
