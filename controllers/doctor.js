
const User = require('../modules/doctors');
const Patient = require('../modules/patients');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports.profile = async function(req,res){
    // console.log(req.query.id,"home page",req.user);
    if(req.query.id === undefined){
        return res.redirect('/');
    }
    let patient = await Patient.findById(req.query.id);
    return res.render('doctor',{
        doctor:req.user,
        title:"Doctor",
        patient:patient
    });
}


module.exports.register = async function(req,res){
    if(req.body.Password === req.body.ConformPassword){
        User.create({
            UserName :req.body.Username,
            Email:req.body.email,
            Password:req.body.Password,
            designation:req.body.designation
        });
        return res.redirect('/user/login');
    }
    return res.redirect('back');
}

module.exports.login = function(req,res){
    console.log(req.user,"143");
    console.log("user found");
    const payload = {
        id:req.user._id,
        expiration: '3000000s'
    }
    const token = jwt.sign(JSON.stringify(payload), 'TOP_SECRET')
    return res.cookie('access_token',token, {httpOnly: true,secure: false}).status(200).redirect('/');
}