const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const MerchantSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String }
    },
    business_name: {
        type: String,
        required: true
    },
    business_description: {
        type: String
    },
    website_url: {
        type: String
    },
    profile_pic: {
        data: Buffer,
        contentType: String
    },
    logo_url: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('merchants', MerchantSchema);