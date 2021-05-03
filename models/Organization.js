const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    webAddress: { type: String, required: true },
    contact: { type: String },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
}, { timestamps: true })


const Organization = mongoose.model('organizations', organizationSchema);

module.exports = Organization