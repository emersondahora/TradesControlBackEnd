const mongoose = require('mongoose');


const OportunidadeSchema = new mongoose.Schema({
    data: Date,
    hora_entrada: String,
    hora_saida: String,
    hora_reversao: String,
    periodo: String,
    operacional: String,
    direcao: String,
    ponto_entrada: Number,
    ponto_saida: Number,
    pontos: Number,
    resultado: String,
    acao: String,
    detalhe: String
})

module.exports = mongoose.model('Oportunidade', OportunidadeSchema);