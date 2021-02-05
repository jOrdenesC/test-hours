const mongoose = require('mongoose');
const schema = mongoose.Schema;

const hourSchema = new schema({
    hour: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('hours', hourSchema);