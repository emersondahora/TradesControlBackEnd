const mongoose = require('mongoose');


const MercadoSchema = new mongoose.Schema({
    data: Date,
    hora: String,
    abertura: Number,
    maxima: Number,
    minima: Number,
    fechamento: Number,
    gap: Boolean,
    ordem: Number,
})

module.exports = mongoose.model('Mercado', MercadoSchema);