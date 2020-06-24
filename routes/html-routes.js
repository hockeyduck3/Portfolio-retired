const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const pageTitle = {
        title: 'Homepage'
    }

    res.render('index', pageTitle);
})

module.exports = router;