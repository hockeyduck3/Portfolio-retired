const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    const pageTitle = {
        title: 'Homepage',
        about: true
    }

    res.render('index', pageTitle);
});

router.get('/portfolio', (req, res) => {
    const pageTitle = {
        title: 'Portfolio',
        portfolio: true
    }

    res.render('portfolio', pageTitle);
});

router.get('/contact', (req, res) => {
    const pageTitle = {
        title: 'Contact',
        contact: true
    }

    res.render('contact', pageTitle);
});

router.get('/resume', (req, res) => {
    fs.readFile('LJ-Spencer-Resume-2020.pdf', function (err, data){
      res.contentType('application/pdf');
      res.send(data);
    });
});

module.exports = router;