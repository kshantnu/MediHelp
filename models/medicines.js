const mongoose = require('mongoose');
const Medicines = mongoose.model('Medicines',{
    medicines: {
        type: [{type: String}],
        required: true,
        trim: true,
    }
});
module.exports = {
    Medicines
}