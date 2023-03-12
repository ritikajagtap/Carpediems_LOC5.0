const Merchant = require(`${__dirname}/../models/MerchantModel`);
const StaticCoupon = require(`${__dirname}/../models/StaticCouponModel`);
const DynamicCoupon = require(`${__dirname}/../models/DynamicCouponModel`);
const GiftCard = require(`${__dirname}/../models/GiftCardModel`);

function calcPercent(num, percentage){
    return num * (percentage / 100);
  }

// API 1 -> Redeeming a gift card 
// Get URL:- api/public/reedemgiftcard/:code
exports.verifyGiftCard = async (req, res) => {
    try {
        const giftCard = await GiftCard.findOne({code: req.params.code});
        if(!giftCard){
            return res
                .status(400)
                .json({ message: "GiftCard code is invalid!" });
        }
        const today = new Date();
        const giftCardDate = new Date(Date.parse(giftCard.expiration));
        if(giftCard.ammount===0 || today>giftCardDate || giftCard.redeemed){
            return res
                .status(400)
                .json({ message: "GiftCard is expired!" });
        }

        // console.log(validStaticCoupons);
        res.status(200).json({
            status: 'success',
            message: "Gift card is valid"
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
} 

// Patch route to be hit 
// req.body.ammount will contain the ammount of the product
// to be used after the payment
// in body send the amount of which the user wants to shop
exports.redeemGiftCard = async (req, res) => {
    try {
        const withdraw = req.body.amount;
        const giftCard = await GiftCard.findOne({code: req.params.code});
        const balance = giftCard.amount - withdraw;
        if(balance <= 0)
        {
            const giftCardUp = await GiftCard.findOneAndUpdate(
                { code: req.params.code }, 
                { redeemed: true }, 
                { new: true } 
            );
        }else if(balance>0 ){
            const giftCardUp = await GiftCard.findOneAndUpdate(
                { code: req.params.code }, 
                { ammount: balance }, 
                { new: true } 
            );
        }
        const newGiftCard = await GiftCard.findOne({code: req.params.code});

        // console.log(validStaticCoupons);
        res.status(200).json({
            status: 'success',
            message: "Gift card is redeemed",
            newGiftCard
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
} 

// GET route to check whether the static coupon code is valid
// verifystaticcoupon/:code
// ammount in body
exports.verifyStaticCoupon = async (req, res) => {
    try {
        const staticCoupon = await StaticCoupon.findOne({code: req.params.code});
        if(!staticCoupon){
            return res
                .status(400)
                .json({ message: "Coupon code is invalid!" });
        }
        const today = new Date();
        const staticCouponDate = new Date(Date.parse(staticCoupon.expiration));
        if(staticCoupon.usage_limit<=0|| today>staticCouponDate){
            return res
                .status(400)
                .json({ message: "Coupon limit is exceeded!" });
        }
        if(req.body.amount < staticCoupon.threshhold){
            return res
            .status(400)
            .json({ message: "Minimum shopping must be of " +  staticCoupon.threshhold});
        }
       
        res.status(200).json({
            status: 'success',
            message: "Coupon code is valid"
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
} 


// Patch route to update the static coupon code
// redeemstaticcoupon/:code
// ammount in body
exports.redeemStaticCoupon= async (req, res) => {
    try {
        const staticCoupon = await StaticCoupon.findOne({code: req.params.code});
        if(!staticCoupon){
            return res
                .status(400)
                .json({ message: "Coupon code is invalid!" });
        }
        const today = new Date();
        const staticCouponDate = new Date(Date.parse(staticCoupon.expiration));
        if(staticCoupon.usage_limit<=0|| today>staticCouponDate){
            return res
                .status(400)
                .json({ message: "Coupon limit is exceeded!" });
        }
        if(req.body.amount < staticCoupon.threshhold){
            return res
            .status(400)
            .json({ message: "Minimum shopping must be of " +  staticCoupon.threshhold});
        }
        console.log()
        const staticCouponUp = await StaticCoupon.findOneAndUpdate(
            { code: req.params.code }, 
            { usage_limit: staticCoupon.usage_limit-1 }, 
            { new: true } 
        );
        if(staticCoupon.discount_percent == 0)
        {
            // console.log(req.body.amount-staticCoupon.discount_value);
            res.status(200).json({
                status: 'success',
                newAmount: req.body.amount-staticCoupon.discount_value,
                message: "static coupon is redeemed",
            });
        }else{
            const newAmount = calcPercent(req.body.amount, staticCoupon.discount_percent);
            
            res.status(200).json({
                status: 'success',
                newAmount: newAmount,
                message: "static coupon is redeemed",
            });
        }

        

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
} 

// GET verify the dynamic coupon
exports.verifyDynamicCoupon = async (req, res) => {
    try {
        const dynamicCoupon = await DynamicCoupon.findOne({code: req.params.code});
        console.log(dynamicCoupon)
        if(!dynamicCoupon){
            return res
                .status(400)
                .json({ message: "Coupon code is invalid!" });
        }
        const today = new Date();
        const dynamicCouponDate = new Date(Date.parse(dynamicCoupon.expiration));
        if(dynamicCoupon.redeemed || today>dynamicCouponDate){
            return res
                .status(400)
                .json({ message: "Coupon is already used or expired!" });
        }
        if(req.body.amount < dynamicCoupon.threshhold){
            return res
            .status(400)
            .json({ message: "Minimum shopping must be of " +  dynamicCoupon.threshhold});
        }
       
        res.status(200).json({
            status: 'success',
            message: "Coupon code is valid"
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
} 

// Patch verify the dynamic coupon
exports.redeemDynamicCoupon= async (req, res) => {
    try {
        const dynamicCoupon = await DynamicCoupon.findOne({code: req.params.code});
        if(!dynamicCoupon){
            return res
                .status(400)
                .json({ message: "Coupon code is invalid!" });
        }
        const today = new Date();
        const dynamicCouponDate = new Date(Date.parse(dynamicCoupon.expiration));
        if(dynamicCoupon.usage_limit<=0|| today>dynamicCouponDate){
            return res
                .status(400)
                .json({ message: "Coupon limit is exceeded!" });
        }
        if(req.body.amount < dynamicCoupon.threshhold){
            return res
            .status(400)
            .json({ message: "Minimum shopping must be of " +  dynamicCoupon.threshhold});
        }
        console.log()
        const dynamicCouponUp = await DynamicCoupon.findOneAndUpdate(
            { code: req.params.code }, 
            { redeemed: true }, 
            { new: true } 
        );
        if(dynamicCoupon.discount_percent == 0)
        {
            res.status(200).json({
                status: 'success',
                newAmount: req.body.amount-dynamicCoupon.discount_value,
                message: "dynamic coupon is redeemed",
            });
        }else{
            const newAmount = calcPercent(req.body.amount, dynamicCoupon.discount_percent);
            
            res.status(200).json({
                status: 'success',
                newAmount: newAmount,
                message: "dynamic coupon is redeemed",
            });
        }

        

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
} 