const Oportunidade = require("../models/Oportunidade")


module.exports = {
    async index(req, res) {
        const operacionais = await Oportunidade.find().sort('data');
        return res.json(operacionais)
    },
    async clear(req, res) {
        const operacionais = await Oportunidade.find();
        list = operacionais.map(item => {
            item.remove();
            return item;
        })
        return res.json({ ok: 'OK', list })
    },

    async save(req, res) {
        try {

            if (req.body.list) {
                let list = [];
                for (i = 0; i < req.body.list.length; i++) {
                    let item = req.body.list[i]
                    list.push(await Oportunidade.create(item));
                }
                return res.json({ list })
            }
        } catch (e) {
            return res.json({ error: e.getMessage() })
        }
        /*
            const { nome } = req.body;
            //const oportunidade = await Oportunidade.create({ nome });

            return res.json({ retorno: 'Retornado', sizes: req.body }) 
            */
    }
}