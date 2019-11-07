const Mercado = require("../models/Mercado")
const util = require("../config/util")

async function clearDay(data) {
    const mercado = await Mercado.find({ data: data });
    list = mercado.map(item => {
        item.remove();
        return item;
    })
}


module.exports = {
    async index(req, res) {
        filter = {};

        if (req.query.data) {
            filter.data = req.query.data
        }
        const mercado = await Mercado.find(filter).sort({ 'ordem': 1 });
        return res.json(mercado)
    },
    async clear(req, res) {
        const mercado = await Mercado.find();
        list = mercado.map(item => {
            item.remove();
            return item;
        })
        return res.json({ ok: 'OK', list })
    },

    async save(req, res) {
        try {
            if (req.body.list) {
                await clearDay(req.body.data);
                let list = [];
                for (i = 0; i < req.body.list.length; i++) {
                    let item = req.body.list[i]
                    list.push(await Mercado.create(item));
                }
                return res.json({ list })
            }
        } catch (e) {
            console.log(e);
            return res.json({ error: e })
        }
    }
}