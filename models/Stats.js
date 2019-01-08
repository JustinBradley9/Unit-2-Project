const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Stats = new Schema({
    strength: Number,
    dexterity: Number,
    agility: Number,
    constitution: Number,
    intellegence: Number,
    wisdom: Number,
    luck: Number,
    faith: Number
});

module.exports = mongoose.model("Stats", Stats)