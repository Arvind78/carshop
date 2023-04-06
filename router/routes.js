const express = require('express');
const {signup,signin,addCars,dealer,enquary} =require('../controller/controller')
const multer = require('multer');
const uploads = multer({dest:"uploads/"})
const router = express.Router();
router.post('/signup',signup)
router.post('/signin',signin)
router.post('/addcars',uploads.single("carImg"),addCars)
router.post('/dealer',dealer)
router.post('/enquary',enquary)

module.exports =router;