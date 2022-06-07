const express = require('express');
const connectToMongo = require('./database/db');
const route = require('./routes/route');
require('dotenv').config();

connectToMongo();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use(route);

console.log('This is indexjs file');

app.listen(port, ()=>{
    console.log(`server started on ${port}`);
});