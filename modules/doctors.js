


{

    
        
    // IMPORTING MONGOOSE.........
    const mongoose=require('mongoose');
    const {Schema} = mongoose

    //  CREATION OF SCHEMA..........
    const newDoctorShema= new mongoose.Schema({
        UserName:{
            type:String,
            require:true
        },
        Email:{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true
        },
        designation:{
            type:String,
            require:true
        }
        
    },{
        timestamps:true
    });



    // CREATION OF MODEL..........
    const newDoctor=mongoose.model('newDoctor',newDoctorShema);
    // EXPORTING OF MODEL...............
    module.exports=newDoctor;

}