const mongoose = require('mongoose');
const Symptoms = mongoose.model('Symptoms',{
    symptom: {
        type: String,
        required: true,
        trim: true,
    },
    key: {
        type: [{type: String}],
        required: true,
        trim: true,
    },
    index: {
        type: String,
        required: true,
        trim: true,
    }

});
module.exports = {
    Symptoms
}