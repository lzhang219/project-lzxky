const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schoolSchema = new Schema({
    id: {type: mongoose.Types.ObjectId, required: true, unique: true},
    name: {type: String, required: true},
    imageURL: {type: String, required: true},
    description: {type: String, required: true}
});

const School = mongoose.model('School', schoolSchema);
module.exports = School;
