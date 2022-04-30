const router = require('express').Router();

const apiRoutes = require('./api');

router.use((req, res) => {
    res.status(404).send('<p> 404, page not found <p>');
});

module.exports = router;