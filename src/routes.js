const express = require('express')
const multer = require('multer')

const OpereacionalControler = require('../controller/OperacionalController')
    /*
    const PostController = require('./controller/PostController')
    const LikeController = require('./controller/LikeController')

    const uploadsConfig = require('./config/upload')
    */

const routes = new express.Router();
//const upload = multer(uploadsConfig);

routes.get('/', (req, res) => {
    res.json({})
})

routes.get('/operacionais', OpereacionalControler.index)
routes.post('/operacionais', OpereacionalControler.save)
    /*
    routes.post('/posts', upload.single('image'), PostController.store);
    routes.get('/posts', PostController.index);
    routes.post('/posts/:id/like', LikeController.store);

    */

module.exports = routes;