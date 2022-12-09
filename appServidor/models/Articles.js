const mongoose = require('mongoose');
const HomeSchema = mongoose.Schema({
    htitle: {
        type: String,
        required: true
    },
    hsubtitle: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ctitle: {
        type: String,
        required: true
    },
    csubtitle: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('articles', HomeSchema);