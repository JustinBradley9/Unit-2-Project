const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    profilePic: String,
    typeOfPlayer: String,
    img: String,
    characters: [{
        type: Schema.Types.ObjectId,
        ref: 'Character'
    }]
});

module.exports = mongoose.model("User", User)