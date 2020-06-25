const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    const pageTitle = {
        title: 'Homepage',
        about: true,
        page404: false
    }

    res.render('index', pageTitle);
});

router.get('/portfolio', (req, res) => {
    const pageTitle = {
        title: 'Portfolio',
        portfolio: true,
        page404: false
    }

    res.render('portfolio', pageTitle);
});

router.get('/resume', (req, res) => {
    fs.readFile('LJ-Spencer-Resume-2020.pdf', function (err, data){
      res.contentType('application/pdf');
      res.send(data);
    });
});

router.get('/contact', (req, res) => {
    const pageTitle = {
        title: 'Contact',
        contact: true,
        page404: false
    }

    res.render('contact', pageTitle);
});

router.get('*', (req, res) => {
    pageTitle = {
        title: '404',
        page404: true
    }

    res.status(404).render('404', pageTitle);
})

module.exports = router;