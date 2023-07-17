



{

    const express = require('express');
    const route = express.Router();
    const patientController = require('../controllers/patient');
    route.get('/all_report:id',patientController.profile);
    route.post('/register',patientController.register);
    route.post('/search',patientController.search);
    route.post('/registerNewReport',patientController.registerNewReport);
    module.exports = route;


}