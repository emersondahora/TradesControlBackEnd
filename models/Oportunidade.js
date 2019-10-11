const mongoose = require('mongoose');


const OportunidadeSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,

})

module.exports = mongoose.model('Oportunidade', OportunidadeSchema);