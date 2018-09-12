const mongoose = require('mongoose');
const UserSubmissions = mongoose.model('UserSubmissions', {
    diseases: {
        type: [{type: String}],
        required: true,
        trim: true,
    },
    symptoms: {
        type: [{type: String}],
        required: true,
        trim: true,
    },
    medicines: {
        type: [{type: String}],
        required: true,
        trim: true,
    },
    doctors: {
        type: [{type: String}],
        required: false,
        trim: true,
    },
    comments: {
        type: [{type: String}],
        required: false,
        trim: true,
    }
   
});
module.exports = {
    UserSubmissions
}
