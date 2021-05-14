const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3000;
const route = require('./routes');
const db = require('./config/db/index');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resource/views'));
db.connect();
route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})