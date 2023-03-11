const express = require('express');
const merchantController = require(`${__dirname}/../controllers/merchantController`);
const giftCardController = require(`${__dirname}/../controllers/giftCardController`);
const staticCouponController = require(`${__dirname}/../controllers/staticCouponController`);
const fetchUser = require(`${__dirname}/../middlewares/fetchUser`);


const router = express.Router();

router.post('/createstaticcoupon', fetchUser, staticCouponController.createstaticcoupon);


module.exports = router;