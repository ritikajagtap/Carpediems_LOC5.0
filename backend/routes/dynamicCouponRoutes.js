const express = require('express');
const merchantController = require(`${__dirname}/../controllers/merchantController`);
const dynamicCouponController = require(`${__dirname}/../controllers/dynamicCouponController`);
const fetchUser = require(`${__dirname}/../middlewares/fetchUser`);


const router = express.Router();

router.post('/createdynamiccoupon', fetchUser, dynamicCouponController.createDynamicCoupon);
router.get('/validdynamiccoupons', fetchUser, dynamicCouponController.validDynamicCoupons);
router.get('/viewalldynamiccoupons', fetchUser, dynamicCouponController.viewallDynamicCoupons);
router.delete('/deletedynamiccouponbycode', fetchUser, dynamicCouponController.deleteDynamicCouponByCode);


module.exports = router;