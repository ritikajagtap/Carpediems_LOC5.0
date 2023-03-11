const mongoose = require('mongoose');
const Merchant = require(`${__dirname}/MerchantModel`);

const GiftCardSchema = new mongoose.Schema({
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
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    expiration: {
        type: Date,
        required: true
    },
    redeemed: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('giftcards', GiftCardSchema);