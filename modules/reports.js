


{
       
    // IMPORTING MONGOOSE.........
    const mongoose=require('mongoose');
    const {Schema} = mongoose

    //  CREATION OF SCHEMA..........
    const newReportShema= new mongoose.Schema({
        BloodGroup:{
            type:String,
            require:true
        },
        TestType:{
            type:String,
            require:true
        },
        MoreInfo:{
            type:String,
            require:true
        },
        status:{
            type:String,
            require:true
        },
        CreatedBy:{
            type:String,
            require:true
        },
        patientId:{
            type:String,
            require:true
        }
    },{
        timestamps:true
    });



    // CREATION OF MODEL..........
    const newReport = mongoose.model('newReport',newReportShema);
    // EXPORTING OF MODEL...............
    module.exports = newReport;

}