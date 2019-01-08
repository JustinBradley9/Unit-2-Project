const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Class = new Schema({
    classname: String,
    mainweapon: String,
    offhandweapon: String,
    armor: String,
    shield: String,
    accesories: String
});

module.exports = mongoose.model("Class", Class)