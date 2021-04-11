const express = require('express');
const { meetRoutes } = require('./meet/meet.routes.js');

//main routes
function mainRoutes() {
    const routes = express.Router();

    //routes to handle meet routes
    routes.use('/meet', meetRoutes());

    // routes to handle undefined routes
    routes.all('*', (req, res) => {
        return res.json({
            error: true,
            code: 404,
            message: 'Bad Request'
        });
    });

    return routes;
}


module.exports = { mainRoutes };