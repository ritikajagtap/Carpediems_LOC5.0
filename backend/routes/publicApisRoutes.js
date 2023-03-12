const express = require('express');
const merchantController = require(`${__dirname}/../controllers/merchantController`);
const dynamicCouponController = require(`${__dirname}/../controllers/dynamicCouponController`);
const publicApis = require(`${__dirname}/../controllers/publicApis`);
const fetchUser = require(`${__dirname}/../middlewares/fetchUser`);


const router = express.Router();

router.get('/verifygiftcard/:code', publicApis.verifyGiftCard);
router.patch('/redeemgiftcard/:code', publicApis.redeemGiftCard);

router.get('/verifystaticcoupon/:code', publicApis.verifyStaticCoupon);
router.patch('/redeemstaticcoupon/:code', publicApis.redeemStaticCoupon);

router.get('/verifydynamiccoupon/:code', publicApis.verifyDynamicCoupon);
router.patch('/redeemdynamiccoupon/:code', publicApis.redeemDynamicCoupon);
module.exports = router;