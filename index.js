// dependencies included
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

//main routes setup
const { mainRoutes } = require('./routes/main.routes.js');

// express app setup
const app = express();

// middleware for routes setup
app.use('/', mainRoutes());

// app config with a port
app.listen(
    process.env.PORT, 
    () => {
        console.log(`Server is working on: ${process.env.PORT}`)
    }
);