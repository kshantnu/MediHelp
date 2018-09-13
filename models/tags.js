const mongoose = require('mongoose');
const Tags = mongoose.model('Tags',{
    disease: {
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
    Tags
}