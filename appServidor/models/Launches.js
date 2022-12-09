const mongoose = require('mongoose');
const LaunhSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    thumbImage: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('lanzamientos', LaunhSchema);