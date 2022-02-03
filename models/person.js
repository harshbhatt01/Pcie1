const mongoose = require('mongoose');
const PersonSchema = mongoose.Schema({
    name: String,
    age: Number,
    contact: Number,
});

module.exports = mongoose.model('Person', PersonSchema);