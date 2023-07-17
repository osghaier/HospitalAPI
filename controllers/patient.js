


const Patients = require('../modules/patients');
const Reports = require('../modules/reports');

module.exports.profile = async function(req,res){
    // console.log(req.query,"Profile patient");
    if(req.query.id === undefined){
        return res.redirect('/');
    }
    let patient = await Patients.findById(req.query.id);
    return res.render('patient',{
        title:"Patient",
        patient:patient
    });
}


module.exports.register = async function(req,res){
    console.log(req.body);
       let newPatient = await Patients.create({
            Name:req.body.Pname,
            MobileNumber:req.body.Mnumber,
            Email:req.body.email,
            Age:req.body.age,
            Gender:req.body.gender,
            Address:req.body.Address,
            doctorId:"64b2353aef246e416ef45d7b"
        });
        return res.status(200).json({
            id:newPatient._id,
            Name:newPatient.Name,
            Mnumber:newPatient.MobileNumber
        });
}



module.exports.search = async function(req,res){
    console.log(req.body);
    let patient = await Patients.find({MobileNumber:req.body.Mnumber});
     if(patient.length !== 0 && patient[0].Name === req.body.Pname){
       console.log("find..!",patient[0]._id);
       return res.status(200).json({
            id:patient[0]._id,
            Name:patient[0].Name,
            Mnumber:patient[0].MobileNumber
       });
     }else{
        return res.status(200).json({
            id:" ",
            message:"patient not fount..! Register.."
        });
     }
};

module.exports.registerNewReport = async function(req,res){
    let patient = await Patients.findById(req.body.id);
    let newReport = await Reports.create({
            BloodGroup:req.body.bloodG,
            TestType:req.body.test,
            MoreInfo:req.body.moreInfo,
            status:req.body.status,
            CreatedBy:req.body.CreateBy,
            patientId:req.body.id
    });
    patient.AllReports.push(newReport);
    await patient.save();
    return res.status(200).redirect(`/Patient/all_reports?id=${req.body.id}`);
}