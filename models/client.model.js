const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name: String,
    address: {
        rue: String,
        ville: String,
        codepostal: String
    },
    contact:String,
    activity:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Client', ClientSchema);
