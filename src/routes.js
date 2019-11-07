const express = require('express')
const multer = require('multer')

const OpereacionalControler = require('./controller/OperacionalController')
const OportunidadeControler = require('./controller/OportunidadeController')
const MercadoControler = require('./controller/MercadoController')
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
routes.get('/oportunidade', OportunidadeControler.index)
routes.post('/oportunidade', OportunidadeControler.save)
routes.get('/oportunidade/clear', OportunidadeControler.clear)
routes.get('/mercado', MercadoControler.index)
routes.post('/mercado', MercadoControler.save)
routes.get('/mercado/clear', MercadoControler.clear)
    /*
    routes.post('/posts', upload.single('image'), PostController.store);
    routes.get('/posts', PostController.index);
    routes.post('/posts/:id/like', LikeController.store);

    */

module.exports = routes;