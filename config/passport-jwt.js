console.log("jwt page........!");
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../modules/doctors');



const cookieExtractor = req => {
    let jwt = null;
    if (req && req.cookies) {
        jwt = req.cookies.access_token
    }
    return jwt
}


passport.use('jwt', new JWTStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: 'TOP_SECRET'
}, async function(jwtPayLoad, done){
    // console.log(jwtPayLoad,"hii abubakar..!");
        let user = await User.findById(jwtPayLoad.id);
        // console.log(user);
    if(!user){
        console.log("user not fount");
        return done(null);
    }
        console.log("user is fount");
        return done(null,user);
}));

module.exports = passport;
