const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/cmatrixweb', { useNewUrlParser: true, useUnifiedTopology: true}).then(function(){
        //connected successfully
    console.error('Connection succed')
    }
)
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db