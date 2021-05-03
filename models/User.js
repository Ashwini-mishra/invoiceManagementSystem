
const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
        firstName: { type: String, required: true },
        lastName: { type: String },
        mobile: { type: String },
        email: { type: String, required: true, unique: true },
        address: { type: String, required: true },
        role: { type: String, default: 1 },
        password: { type: String, default: true },
        lastLoginAt:{type:Date,default:Date.now},
        organizations: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'organizations' }
        ],
    },{ timestamps: true })


const User = mongoose.model('users', userSchema);

module.exports = User;

