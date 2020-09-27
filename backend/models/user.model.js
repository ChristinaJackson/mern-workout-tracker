const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//schema has a single field with validations to username
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;