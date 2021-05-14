const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/bum_bum_shop', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('CONNECTED !');
    } catch (error) {
        console.log('CONNECT FAiLURE !!!');
    }
}


module.exports = { connect };