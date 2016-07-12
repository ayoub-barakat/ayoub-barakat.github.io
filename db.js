var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stm', function () {
    console.log('mongodb connected')
})
module.exports = mongoose
