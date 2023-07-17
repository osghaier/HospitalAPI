


{
    const express = require('express');
    const route = express.Router();
    const passport = require('passport');
    const homeController= require('../controllers/home');

    route.get('/',passport.authenticate('jwt',{
        session:false,
    failureRedirect:'/user/login'}),homeController.home);

    route.use('/user',require('./user'));

    route.use('/doctor',require('./doctor'));

    route.use('/patient', passport.authenticate('jwt',{
        session:false,
        failureRedirect:'/user/login'
    }),require('./patient'));

 
    module.exports=route;

}