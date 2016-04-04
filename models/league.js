var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var League = Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    units: [{
        name: {type: String, required: true},
        rating: {type: Number, default: 1000 },
        games: {type: Number, default: 0}
    }]
})

module.exports = mongoose.model('League', League);