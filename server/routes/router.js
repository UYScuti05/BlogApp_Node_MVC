const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

//routes
route.get('/',services.homeRoutes);
route.get('/add-blog',services.add_blog);
route.get('/update-blog',services.update_blog);
route.get('/view-blog',services.view_blog);

//API
route.post('/api/blog',controller.create);
route.get('/api/blog',controller.find);
route.put('/api/blog/:id',controller.update);
route.delete('/api/blog/:id',controller.delete);

module.exports = route;