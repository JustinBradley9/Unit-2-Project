User = require("../models/User")
Character = require("../models/Character")
Stats = require('../models/Stats')
Class = require('../models/Class')

const charactersController = {
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
            Characters.create(req.body)
            .then((characters) => {
                User.Characters.push(characters)
                User.save()
                res.redirect(`/${User._id}/characters`)
            })
        })
    },
    show: (req, res) => {
        const CharactersId = req.params.charactersId
        const UserId = req.params.id
        Character.findById(CharactersId).populate('stats', 'class').then((Character) => {
            res.render('characters/show', { Character: Character, UserId: UserId })
        }).catch((help) => {
            console.log(help)
        })
    },
    edit: (req, res) => {
        const UserId = req.params.id
        const charactersId = req.params.charactersId
        res.render('characters/edit', {UserId, charactersId})
    },
    update: (req, res) => {
        const UserId = req.params.id
        const CharactersId = req.params.CharactersId
        console.log(CharactersId)
        Characters.findByIdAndUpdate(CharactersId, req.body, {new: true})
        .then((Characters) => {
            res.redirect(`/${UserId}/characters/${CharactersId}`)
        })
    },
    delete: (req, res) => {
        const UserId = req.params.id
        const charactersId = req.params.charactersId
        characters.findByIdAndDelete(charactersId)
        .then(() => {
            res.redirect(`/${UserId}/characters`)
        })
    }
}




module.exports = charactersController