const express = require('express');
const companyController = require('../../controllers/company.controller');

//meet company routes
function meetCompanyRoutes() {

    // routes setup
    const routes = express.Router();
    
    // meet comanpany routes setup
    routes.get('/', companyController.getMeetCompany);

    return routes;
}

module.exports = { meetCompanyRoutes };