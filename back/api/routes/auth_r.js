/*** IMPORT */
const express = require('express')
const authCtrl = require('../controllers/auth_c')

/*** EXPRESS ROUTER */
let router = express.Router()

router.use( (req, res, next) => {
    const event = new Date()
    console.log('AUTH Time:', event.toString())
    next()
})

/*** USER ROUTE */
router.post('/login', authCtrl.login)

module.exports = router