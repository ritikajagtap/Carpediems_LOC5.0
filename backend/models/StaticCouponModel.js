const mongoose = require('mongoose');

const StaticCouponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    merchantId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    threshhold: {
        type: Number,
        required: true,
        min: 0
    },
    expiration: {
        type: Date,
        required: true,
        default: Date.now
    },
    discount_value: {
        type: Number,
        default: 0,
    },
    discount_percent: {
        type: Number,
        default: 0,
    },
    usage_limit: {
        type: Number,
        default: 1
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('staticcoupons', StaticCouponSchema);