const express = require('express');
const router = new express.Router();
const userHandler = require('../services/userService');

router.get('/home',(req, res)=>{
    console.log('default route')
    res.send('home page');
});


router.post('/user-login',async(req, res)=>{
    userHandler.userLogin(req, res); 
});

router.post('/user-register',async(req, res)=>{
    userHandler.Registration(req, res); 
});


module.exports = router;