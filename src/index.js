const express = require('express');

const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);


mongoose.connect('mongodb+srv://mongotrader:trader1234@cluster0-cugee.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser());
//app.use('/files', express.static(path.resolve(__dirname, '..','uploads', 'resized')));
app.use(require('./routes'));

server.listen(3003, () => {
    console.log('Backend executando...')
})