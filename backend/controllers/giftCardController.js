const Merchant = require(`${__dirname}/../models/MerchantModel`);
const GiftCard = require(`${__dirname}/../models/GiftCardModel`);
const voucher_codes = require('voucher-code-generator');

// checking if the id is valid in terms of time period as well as id is correct (also give the balance left in response)
// after payment hitting the route which will deduct the amount from gift card and return it as well
// { amount: 900,}

// POST creategiftcard/ :- Creating a gift card for particular merchant (merchant should be logged in)
exports.createGiftCard = async (req, res) => {
    try {
        const { name, count, amount, expiration, redeemed } = req.body;
        if (!name) {
            return res
                .status(400)
                .json({ message: "Please enter the name of a gift card!" });
        }
        
        if (!amount || amount < 100) {
            return res
                .status(400)
                .json({ message: "Enter a valid amount!" });
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
        const obj = [];
        for (let i = 0; i < count; i++) {

            const newObj = await GiftCard.create({
                merchantId: req.user.id,
                name: req.body.name,
                code: code[i],
                amount: amount,
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

// GET /viewallgiftcards
exports.viewallgiftcards = async (req, res) => {
    try {
        const code = req.params.code;
        // console.log(name);
        const giftCards = await GiftCard.find({merchantId: req.user.id});
        console.log(giftCards)
        if(giftCards.length ===0){
            return res
                .status(400)
                .json({ message: "GiftCard not found!" });
        }
        
        res.status(200).json({
            status: 'success',
            length: giftCards.length,
            data: {
                giftCards: giftCards
            }
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

// DELETE /deletegiftcardbycode/:code
exports.deleteGiftCardByCode = async (req, res) => {
    try {
        const code = req.params.code;
        // console.log(name);
        const giftCard = await GiftCard.find({code: code});
        // console.log(giftCard)
        if(giftCard.length===0){
            return res
                .status(400)
                .json({ message: "GiftCard not found!" });
        }
        // console.log(giftCards.length)
        const giftCardDel = await GiftCard.findOneAndDelete({code: code}, {merchantId: req.user.id});
        
        res.status(200).json({
            status: 'success',
            
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

// DELETE /deletegiftcardbyname/:giftcardname
exports.deleteGiftCardbyname = async (req, res) => {
    try {
        const name = req.params.giftcardname;
        // console.log(name);
        const giftCards = await GiftCard.find({name: name}, {merchantId: req.user.id});
        if(giftCards.length===0){
            return res
                .status(400)
                .json({ message: "GiftCards not found!" });
        }
        // console.log(giftCards.length)
        const giftCard = await GiftCard.deleteMany({name: name}, {merchantId: req.user.id});
        // console.log(giftCard);
        res.status(200).json({
            status: 'success',
            
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}