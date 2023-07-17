 
 const Patients = require('../modules/patients');
 const jwt = require('passport-jwt');

 
 //  RENDERING OF HOME PAGE ..........
module.exports.home = async function(req,res){
        if (req.user.length===0) {
           return res.redirect('/user/login');
        }               
        let allPatients = await Patients.find({doctorId:"64b2353aef246e416ef45d7b"});
        return res.render('home',{
                doctor:req.user,
                title:"Home",
                allPatients:allPatients
        });       
}


    
// const authorization = (req, res, next) => {
//         // const token = req.cookies.access_token;
//         console.log(token);
//         if (!token) {
//           return res.sendStatus(403);
//         }
//         try {
//           const data = jwt.verify(token, "TOP_SECRET");
//           req.userId = data.id;
//           req.userRole = data.role;
//           return next();
//         } catch {
//           return res.sendStatus(403);
//         }
//       };
     