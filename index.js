




{

    

    // Calling of the all required Pakages...........
    const express = require('express');
    const bodyParser = require("body-parser");
    const expressEjsLayouts = require('express-ejs-layouts');
    const cookieParser = require('cookie-parser');
    const path = require('path');
    const port=8889;
    const app = express();

    // connecting to mongoose..
    const db=require('./config/mongoose');
    const passport = require('./config/passport-local');
    const passport_jwt = require('./config/passport-jwt');

    // Configuration for body-Parser.............
    app.use(bodyParser.urlencoded());
    app.use(express.urlencoded());
    



    // Configoration for all static file.........
    app.set('view engine','ejs');
    app.set('views' , path.join(__dirname,'views'));
    app.use(expressEjsLayouts);
    app.use(express.static('./assets'));
    app.use(cookieParser());
    app.use(passport.initialize());

    // linking routes with app to get request and responces......
    app.use('/',require('./routs/home'));


    // Listening of port and call back for Error handling..........
    app.listen(port,function(error){
        if(error){
            console.log(error);
            return;
        }
        console.log('Server running on port',port);
    });



}