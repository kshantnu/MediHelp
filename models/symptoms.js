const mongoose = require('mongoose');
const Symptoms = mongoose.model('Symptoms',{
    symptoms: {
        type: [{type: String}],
        required: true,
        trim: true,
    }
});
module.exports = {
    Symptoms
}