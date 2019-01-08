const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const characterController = require('../controller/characterController')

router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/:id', userController.show)
router.get('/:id/edit', userController.edit)
router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)

router.get('/:id/characters', characterController.index)
router.get('/:id/character/new', characterController.new)
router.post('/:id/character', characterController.create)
router.get('/:id/character/:characterId', characterController.show)
router.get('/:id/character/:characterId/edit', characterController.edit)
router.patch('/:id/character/:characterId', characterController.update)
router.delete('/:id/character/:characterId', characterController.delete)

module.exports = router