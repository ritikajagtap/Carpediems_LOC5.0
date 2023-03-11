const Merchant = require(`${__dirname}/../models/MerchantModel`);
const GiftCard = require(`${__dirname}/../models/GiftCardModel`);
const voucher_codes = require('voucher-code-generator');

// checking if the id is valid in terms of time period as well as id is correct (also give the balance left in response)
// after payment hitting the route which will deduct the ammount from gift card and return it as well
// { ammount: 900,}

// POST creategiftcard/ :- Creating a gift card for particular merchant (merchant should be logged in)
exports.createGiftCard = async (req, res) => {
    try {
        const { name, count, ammount, expiration, redeemed } = req.body;
        if (!name) {
            return res
                .status(400)
                .json({ message: "Please enter the name of a gift card!" });
        }
        
        if (!ammount || ammount < 100) {
            return res
                .status(400)
                .json({ message: "Enter a valid ammount!" });
        }
        if(!expiration || expiration>Date.now){
            return res
                .status(400)
                .json({ message: "Enter a valid expiration date!" });
        }
        const code = voucher_codes.generate({
            length: 8,
            count: count
        });
        console.log(code[0]);
        const obj = [];
        for (let i = 0; i < count; i++) {

            const newObj = await GiftCard.create({
                merchantId: req.user.id,
                name: req.body.name,
                code: code[i],
                ammount: ammount,
                expiration: expiration
            });
            obj.push(newObj);
        }
        res.status(200).json({
            status: 'success',
            data: {
                obj,
            },
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

// DELETE /deletegiftcard/:giftcardname
exports.deleteGiftCard = async (req, res) => {
    try {
        
        res.status(200).json({
            status: 'success',
            data: {

            },
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}