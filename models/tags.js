const mongoose = require('mongoose');
const Tags = mongoose.model('Tags',{
    disease: {
        type: String,
        required: true,
        trim: true,
    },
    index: {
        type: [{type: String}],
        required: true,
        trim: true,
    },

});
module.exports = {
    Tags
}