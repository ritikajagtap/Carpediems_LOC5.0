const Merchant = require(`${__dirname}/../models/MerchantModel`);
const StaticCoupon = require(`${__dirname}/../models/StaticCouponModel`);
const GiftCard = require(`${__dirname}/../models/GiftCardModel`);

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

// POST route to be hit 
// req.body.ammount will contain the ammount of the product
// to be used after the payment
exports.redeemGiftCard = async (req, res) => {
    try {
        const withdraw = req.body.ammount;
        const giftCard = await GiftCard.findOne({code: req.params.code});
        const balance = giftCard.ammount - withdraw;
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
        if(req.body.ammount < staticCoupon.threshhold){
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


// POST route to update the static coupon code
// redeemstaticcoupon/:code
// ammount in body
exports.redeemStaticCoupon= async (req, res) => {
    try {
        // const staticCoupon = StaticCoupon.findOne({code: req.params.code});
        // if(staticCoupon.discount_percent == 0)
        // {
        //     const newAmount = req.body.ammount-staticCoupon.discount_value;
        //     if(newAmount<0){
        //         newAmount = newAmount*(50/100);
        //     }else{
        //         newAmount = newAmount - ;

        //     }
        //     res.status(200).json({
        //         status: 'success',
        //         newAmmount: req.body.ammount-discount_value,
        //         message: "Gift card is redeemed",
        //         newGiftCard
        //     });
        // }

        // console.log(validStaticCoupons);
        res.status(200).json({
            status: 'success',
            message: "static coupon card is redeemed",
            newGiftCard
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
} 
