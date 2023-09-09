const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/Admin');
const shopRouter = require('./routes/shop');
const app = express();

app.use(adminRouter);
app.use(shopRouter);
app.use(bodyParser.urlencoded({ extended:false })); 

app.listen(3000);
