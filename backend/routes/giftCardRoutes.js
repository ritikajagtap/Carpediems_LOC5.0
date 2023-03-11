const express = require('express');
const merchantController = require(`${__dirname}/../controllers/merchantController`);
const giftCardController = require(`${__dirname}/../controllers/giftCardController`);
const fetchUser = require(`${__dirname}/../middlewares/fetchUser`);


const router = express.Router();

router.post('/creategiftcard', fetchUser, giftCardController.createGiftCard);
router.get('/viewallgiftcards', fetchUser, giftCardController.viewallgiftcards);
router.delete('/deletegiftcardbyname/:giftcardname', fetchUser, giftCardController.deleteGiftCardbyname);
router.delete('/deletegiftcardbycode/:code', fetchUser, giftCardController.deleteGiftCardByCode);


module.exports = router;