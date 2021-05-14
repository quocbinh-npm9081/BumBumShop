const menClothing = require('./men-clothing');
const womenClothing = require('./women-clothing');
const site = require('./site');


function route(app) {

    app.use('/men-clothing', menClothing);
    app.use('/women-clothing', womenClothing);
    app.use('/', site);
}

module.exports = route;