const routes = require('express').Router();
routes.get('/', (req, res) => {
    res.send('This Guy');
});
module.exports = routes;