const express = require('express');
const testApiRoutes = require('./routes/testApi.routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/test-api', testApiRoutes);


module.exports = app;