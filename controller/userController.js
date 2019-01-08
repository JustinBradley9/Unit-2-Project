User = require("../models/User")
Character = require("../models/Character")
Stats = require('../models/Stats')
Class = require('../models/Class')

const userController = {
    index: (req, res) => {
        User.find({}).then(users => {
            res.render('apps/index', { users})
        })
    },
    new: (req, res) => {
        res.render("apps/new")
    },
    create: (req, res) => {
        console.log(req.body)
        User.create({
            name: req.body.name,
            user: req.body.user,
            content: req.body.content,
            img: req.body.img,
            createdAt: req.body.createdAt
        }).then(newUser => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
      const UserId = req.params.id
      User.findById(UserId).populate('characters').then((User) => {
        console.log(User)
        res.render('apps/show', { User })
      })
    },
    edit: (req, res) => {
        const UserId = req.params.id
        // console.log(UserId)
        res.render('apps/edit', {UserId})
    },
    update: (req, res) => {
        const UserId = req.params.id
        console.log(req.body)
        User.findByIdAndUpdate(UserId, req.body, {new: true}).then((User) => {
            res.redirect(`/${UserId}`)
        })
    },
    delete: (req, res) => {
        const UserId = req.params.id
        User.findByIdAndRemove(UserId).then(() => {
            res.redirect('/')
        })
    }
}



module.exports = userController