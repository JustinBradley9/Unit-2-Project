User = require("../models/User")
Character = require("../models/Character")
Stats = require('../models/Stats')
Class = require('../models/Class')

const classController = {
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
        .then((Users) => {
            Character.create(req.body)
            .then((newcharacter) => {
                Users.characters.push(newcharacter)
                Users.save()
                res.redirect(`/`)
            })
        })
    },
    show: (req, res) => {
        console.log("req",req.params)
        const CharacterId = req.params.charactersId
        const UserId = req.params.id
        Character.findById(CharacterId).populate('class').populate('stats').then((Character) => {
            // console.log("Character",Character)
            res.render('characters/show', { Character: Character, UserId: UserId })
        }).catch((help) => {
            // console.log(help)
        })
    },
    edit: (req, res) => {
        const UserId = req.params.id
        const charactersId = req.params.charactersId
        res.render('characters/edit', {UserId, charactersId})
    },
    update: (req, res) => {
        const UserId = req.params.id
        const charactersId = req.params.charactersId
        Character.findByIdAndUpdate(charactersId, req.body, {new: true})
        .then(() => {
            res.redirect(`/${UserId}/characters/${charactersId}`)
        })
    },
    delete: (req, res) => {
        const UserId = req.params.id
        const charactersId = req.params.charactersId
        Character.findByIdAndDelete(charactersId)
        .then(() => {
            res.redirect(`/${UserId}/characters`)
        })
    }
}




module.exports = classController