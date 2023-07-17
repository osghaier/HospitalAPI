




{


    const express = require('express');
    const route = express.Router();
    const passport = require('passport');
    const jwt = require('jsonwebtoken');
    const doctorController = require('../controllers/doctor');


    route.post('/register:id',passport.authenticate('jwt',{
        session:false,
    failureRedirect:'/user/login'}),doctorController.register);
    route.get('/profile',passport.authenticate('jwt',{
        session:false,
    failureRedirect:'/user/login'}),doctorController.profile);
    route.post('/login',passport.authenticate('local-login',{
        session:false,
        failureRedirect:'/user/login'
      }),doctorController.login);


    module.exports = route;




}