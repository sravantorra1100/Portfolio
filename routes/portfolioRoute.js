const express =require('express')
const { SendEmailController } = require('../conrollers/portfolioController')


//router object
const router =express.Router()

//routes
router.post('/sendEmail',SendEmailController)


//export
module.exports =router;