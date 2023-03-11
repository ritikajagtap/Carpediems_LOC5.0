const Merchant = require(`${__dirname}/../models/MerchantModel`);
const StaticCoupon = require(`${__dirname}/../models/StaticCouponModel`);
const DynamicCoupon = require(`${__dirname}/../models/DynamicCouponModel`);
const GiftCard = require(`${__dirname}/../models/GiftCardModel`);
const voucher_codes = require('voucher-code-generator');

// POST createdynamiccoupon/ :- Creating a static coupon for particular merchant (merchant should be logged in)
exports.createDynamicCoupon = async (req, res) => {
    try {
        const { name, count, threshhold, expiration, discount_value, discount_percent } = req.body;
        if (!name) {
            return res
                .status(400)
                .json({ message: "Please enter the name of the coupon!" });
        }
        
        // const date = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const today = new Date();
        const userDate = new Date(Date.parse(expiration));


        if (!expiration || userDate < today) {
            return res
                .status(400)
                .json({ message: "Enter a valid expiration date!" });
        }
        // console.log(threshhold);
        if (!threshhold || threshhold <= 0) {
            return res
                .status(400)
                .json({ message: "Enter a valid threshold ammount!" });
        }
        if (!discount_percent && !discount_value) {
            return res
                .status(400)
                .json({ message: "Enter either discount percent or discount value!" });
        }
        if (discount_percent && discount_value) {
            return res
                .status(400)
                .json({ message: "Enter either discount percent or discount value!" });
        }

        const code = voucher_codes.generate({
            length: 10,
            count: count
        });
        const obj = [];
        for (let i = 0; i < count; i++) {
            const newObj = await DynamicCoupon.create({
                merchantId: req.user.id,
                name: req.body.name,
                code: code[i],
                threshhold: threshhold,
                discount_percent: discount_percent,
                discount_value: discount_value,
                expiration: expiration
            });
            obj.push(newObj);
        }


        res.status(200).json({
            status: 'success',
            data: {
                result: obj
            }

        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}


// GET valid coupons 
exports.validDynamicCoupons = async (req, res) => {
    try {
        const date = new Date;
        // const validStaticCoupons = await StaticCoupon.find({ merchantId: req.user.id }, { expiration: { $lt: date } });
        const validDynamicCoupons = await DynamicCoupon.find({ merchantId: req.user.id, expiration: { $gt: date } });

        // console.log(validStaticCoupons);
        res.status(200).json({
            status: 'success',
            length: validDynamicCoupons.length,
            data: {
                validDynamicCoupons: validDynamicCoupons
            }
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
} 

// GET /viewalldynamiccoupons/
exports.viewallDynamicCoupons = async (req, res) => {
    try {
        // console.log(name);
        const viewallDynamicCoupons = await DynamicCoupon.find({merchantId: req.user.id});
        console.log(viewallDynamicCoupons)
        if(viewallDynamicCoupons.length ===0){
            return res
                .status(400)
                .json({ message: "Dynamic Coupons not found!" });
        }
        
        res.status(200).json({
            status: 'success',
            length: viewallDynamicCoupons.length,
            data: {
                viewallDynamicCoupons: viewallDynamicCoupons
            }
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

// DELETE /deletedynamiccouponbycode/:code
exports.deleteDynamicCouponByCode = async (req, res) => {
    try {
        const code = req.params.code;
        // console.log(name);
        const dynamicCoupon = await DynamicCoupon.find({code: code});
        // console.log(giftCard)
        if(dynamicCoupon.length===0){
            return res
                .status(400)
                .json({ message: "dynamicCoupon not found!" });
        }
        // console.log(giftCards.length)
        const dynamicCouponDel = await DynamicCoupon.findOneAndDelete({code: code}, {merchantId: req.user.id});
        res.status(200).json({
            status: 'success',
            
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}