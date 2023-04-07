const express = require('express');
const {signup,signin,addCars,dealer,enquary,dealersignup} =require('../controller/controller')
const multer = require('multer');
const uploads = multer({dest:"uploads/"})
const router = express.Router();
router.post('/signup',signup)
router.post('/signin',signin)
router.post('/addcars',uploads.single("carimg"),addCars)
router.post('/dealersignup',dealersignup)
router.post('/dealersignin',dealer)
router.post('/enquary',enquary)

module.exports =router;
