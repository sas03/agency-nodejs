const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: String,
    description: String,
    status:String,
    debut: Date,
    fin: Date,
    cost: Number,
    client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
