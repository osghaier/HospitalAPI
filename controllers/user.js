const passport = require("passport");

module.exports.logout = function(req,res){
    res.clearCookie('access_token');
    return res.redirect('/user/login');
}


module.exports.login = async function(req,res){
    const token = await req.cookies.access_token;
    if(token !== undefined){
        console.log("user found!");
        return res.redirect('/');
    }
    console.log("user not found!");
    return res.render('login',{
        title:"Login"
    });
}

module.exports.signup = async function(req,res){
    const token = await req.cookies.access_token;
    if(token !== undefined){
        console.log("user found!");
        return res.redirect('/');
    }
    return res.render('signup',{
        title:"SignUp"
    });
}