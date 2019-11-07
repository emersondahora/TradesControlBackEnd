const mongoose = require('mongoose');


const OperacionalSchema = new mongoose.Schema({
    nome: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('Operacional', OperacionalSchema);