const express = require('express');
const { meetCompanyRoutes }= require('./company.routes.js');

// meet main routes
function meetRoutes() {
    const routes = express.Router();
    
    // routes for companies
    routes.use('/companies', meetCompanyRoutes());

    return routes;
}

module.exports = { meetRoutes };