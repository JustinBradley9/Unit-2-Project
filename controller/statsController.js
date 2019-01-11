User = require("../models/User")
Character = require("../models/Character")
Stats = require('../models/Stats')
Class = require('../models/Class')

const statsController = {
    edit: (req, res) => {
        const UserId = req.params.id
        const charactersId = req.params.charactersId
        res.render('stats/index', {UserId, charactersId})
    },
    update: (req, res) => {
        const UserId = req.params.id
        const charactersId = req.params.charactersId
        Character.findByIdAndUpdate(charactersId, req.body, {new: true})
        .then(() => {
            res.redirect(`/${UserId}/characters/${charactersId}`)
        })
    }
}




module.exports = statsController