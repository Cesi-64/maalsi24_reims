/*** IMPORT */
const express = require('express')
const userCtrl = require('../controllers/user_c')

/*** EXPRESS ROUTER */
let router = express.Router()

router.use( (req, res, next) => {
    const event = new Date()
    console.log('USER Time:', event.toString())
    next()
})

/*** USER ROUTE */
router.get('/', userCtrl.getAllUsers)
router.get('/:id([0-9]+)', userCtrl.getUser)

router.put('/', userCtrl.addUser)
router.patch('/:id([0-9]+)', userCtrl.modifyUser)

router.delete('/:id([0-9]+)', userCtrl.deleteUser)

module.exports = router