const Merchant = require(`${__dirname}/../models/MerchantModel`);
const StaticCoupon = require(`${__dirname}/../models/StaticCouponModel`);
const GiftCard = require(`${__dirname}/../models/GiftCardModel`);
const voucher_codes = require('voucher-code-generator');

// POST createstaticcoupon/ :- Creating a static coupon for particular merchant (merchant should be logged in)
exports.createstaticcoupon = async (req, res) => {
    try {
        const { name, usage_limit, threshhold, expiration, discount_value, discount_percent } = req.body;
        if (!name) {
            return res
                .status(400)
                .json({ message: "Please enter the name of the coupon!" });
        }

        if (!usage_limit || usage_limit <= 0) {
            return res
                .status(400)
                .json({ message: "Enter a valid ammount!" });
        }
        if (!expiration || expiration > Date.now) {
            return res
                .status(400)
                .json({ message: "Enter a valid expiration date!" });
        }
        if (!threshhold || threshhold > 0) {
            return res
                .status(400)
                .json({ message: "Enter a valid threshold ammount!" });
        }
        if (!discount_percent || !discount_value) {
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
            count: 1
        });

        const newObj = await StaticCoupon.create({
            merchantId: req.user.id,
            name: req.body.name,
            code: code[0],
            threshhold: threshhold,
            usage_limit: usage_limit,
            discount_percent: discount_percent,
            discount_value: discount_value,
            expiration: expiration
        });

        res.status(200).json({
            status: 'success',
            data: {
                newObj,
            },
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}