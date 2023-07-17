


{
       
    // IMPORTING MONGOOSE.........
    const mongoose=require('mongoose');
    const {Schema} = mongoose

    //  CREATION OF SCHEMA..........
    const newPatientShema= new mongoose.Schema({
        Name:{
            type:String,
            require:true
        },
        Email:{
            type:String,
            require:true
        },
        Age:{
            type:String,
            require:true
        },
        Gender:{
            type:String,
            require:true
        },
        MobileNumber:{
            type:String,
            require:true
        },
        Address:{
            type:String,
            require:true
        },
        AllReports:{
            type:Array,
            require:true
        },
        doctorId:{
            type:String,
            require:true
        }
        
    },{
        timestamps:true
    });



    // CREATION OF MODEL..........
    const newPatient = mongoose.model('newPatient',newPatientShema);
    // EXPORTING OF MODEL...............
    module.exports = newPatient;

}