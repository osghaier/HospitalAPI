



{

    const express = require('express');
    const passport =require('passport');
    const route = express.Router();

    const userController = require('../controllers/user');
    route.get('/signup',userController.signup);
    route.get('/login',userController.login);
    route.get('/logout', passport.authenticate('jwt',{
        session:false,
        failureRedirect:'/user/login'
    }),userController.logout);

    module.exports = route;

}