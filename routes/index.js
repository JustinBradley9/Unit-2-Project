const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const characterController = require('../controller/characterController')
const statsController = require('../controller/statsController')
const classController = require('../controller/classController')

router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/:id', userController.show)
router.get('/:id/edit', userController.edit)
router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)

router.get('/:id/characters', characterController.index)
router.get('/:id/characters/new', characterController.new)
router.post('/:id/characters', characterController.create)
router.get('/:id/characters/:charactersId', characterController.show)
router.get('/:id/characters/:charactersId/edit', characterController.edit)
router.patch('/:id/characters/:charactersId', characterController.update)
router.delete('/:id/characters/:charactersId', characterController.delete)


router.get('/:id/characters/:charactersId/editstats', statsController.edit)
router.patch('/:id/characters/:charactersId', statsController.update)


router.get('/:id/characters/:charactersId/editclass', classController.edit)
router.patch('/:id/characters/:charactersId', classController.update)

module.exports = router