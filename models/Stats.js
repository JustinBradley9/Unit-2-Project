const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Stats = new Schema({
    Strength: Number,
    Dexterity: Number,
    Agility: Number,
    Constitution: Number,
    Intellegence: Number,
    Wisdom: Number,
    Luck: Number,
    Charisma: Number,
    Faith: Number
});

module.exports = mongoose.model("Stats", Stats)