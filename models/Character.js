const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Character = new Schema({
    name: String,
    race: String,
    allignment: String,
    img: String,
    gender: String,
    level: String,
    background: String,
    class: [{
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }],
    stats: [{
        type: Schema.Types.ObjectId,
        ref: 'Stats'
    }]
});

module.exports = mongoose.model("Character", Character)