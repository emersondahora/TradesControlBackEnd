const Operacional = require("../models/Operacional")


module.exports = {
    async index(req, res) {
        const operacionais = await Operacional.find();
        return res.json(operacionais)
    },
    async save(req, res) {
        const { nome } = req.body;
        const operacional = await Operacional.create({ nome });

        return res.json(operacional)
    }
}