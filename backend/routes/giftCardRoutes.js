const express = require('express');
const merchantController = require(`${__dirname}/../controllers/merchantController`);
const giftCardController = require(`${__dirname}/../controllers/giftCardController`);
const fetchUser = require(`${__dirname}/../middlewares/fetchUser`);


const router = express.Router();

router.post('/creategiftcard', fetchUser, giftCardController.createGiftCard);


module.exports = router;