const mongoose = require('mongoose');
const Tags = mongoose.model('Tags',{
    tag: {
        name: String,
        required: true,
        trim: true,
    },
    index: {
        name: [{type: String}],
        required: true,
        trim: true,
    },

});
module.exports = {
    Tags
}