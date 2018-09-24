const mongoose = require('mongoose');
const Doctors = mongoose.model('Doctors',{
    doctors: {
        type: [{type: String}],
        required: true,
        trim: true,
    }
});
module.exports = {
    Doctors
}