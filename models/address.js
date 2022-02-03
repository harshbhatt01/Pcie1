const mongoose = require('mongoose');
const AddressSchema = mongoose.Schema({
    address: String,
    postal: Number,
    city: String,
});

module.exports = mongoose.model('Address', AddressSchema);