const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Contact
router.get('/contact', forwardAuthenticated, (req, res) => res.render('contact'));



//ABOUT
router.get('/about', forwardAuthenticated, (req, res) => res.render('about'));

//SERVICES
router.get('/services', forwardAuthenticated, (req, res) => res.render('services'));

//ROADMAP
router.get('/roadmap', forwardAuthenticated, (req, res) => res.render('roadmap'));






module.exports = router;

