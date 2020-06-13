const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const router = express.Router();
// const mongoose = require('mongoose');
require('dotenv/config');

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/html/index.html'));
});

router.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname+'/about.html'));
});

app.use(express.static(__dirname+'/html'));
app.use(express.static(__dirname+'/styles'));
app.use(express.static(__dirname+'/scripts'));

app.use('/',router);
app.listen(port, ()=>{
    console.log("express is running on http://localhost:"+port);
});

