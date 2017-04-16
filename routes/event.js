const express = require('express');
const router = express.Router()
const eventController = require('../controllers/event')

router.post('/', eventController.create)

router.get('/', eventController.getAll)

router.put('/:id', eventController.update)

router.delete('/:id', eventController.delete)


module.exports = router
