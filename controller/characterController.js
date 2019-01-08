User = require("../models/User")
Character = require("../models/Character")
Stats = require('../models/Stats')
Class = require('../models/Class')

const characterController = {
    index: (req, res) => {
        const UserId = req.params.id
        console.log(UserId)
        User.findById(UserId).populate('characters').then((User) => {
            const characters = User.characters
            res.render('characters/index', { characters, UserId })
        })
    },
    new: (req, res) => {
        const UserId = req.params.id
        res.render('characters/new', {UserId: UserId})
    },
    create: (req, res) => {
        const UserId = req.params.id
        User.findById(UserId)
        .then((User) => {
            character.create(req.body)
            .then((character) => {
                User.characters.push(character)
                User.save()
                res.redirect(`/${User._id}/characters`)
            })
        })
    },
    show: (req, res) => {
        const characterId = req.params.characterId
        const UserId = req.params.id
        character.findById(characterId).then((character) => {
            res.render('characters/show', { character: character, UserId: UserId })
        }).catch((help) => {
            console.log(help)
        })
    },
    edit: (req, res) => {
        const UserId = req.params.id
        const characterId = req.params.characterId
        res.render('characters/edit', {UserId, characterId})
    },
    update: (req, res) => {
        const UserId = req.params.id
        const characterId = req.params.characterId
        console.log(characterId)
        character.findByIdAndUpdate(characterId, req.body, {new: true})
        .then((character) => {
            res.redirect(`/${UserId}/characters/${characterId}`)
        })
    },
    delete: (req, res) => {
        const UserId = req.params.id
        const characterId = req.params.characterId
        character.findByIdAndDelete(characterId)
        .then(() => {
            res.redirect(`/${UserId}/characters`)
        })
    }
}




module.exports = characterController