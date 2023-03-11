const express = require('express');
const merchantController = require(`${__dirname}/../controllers/merchantController`);
const fetchUser = require(`${__dirname}/../middlewares/fetchUser`);


const router = express.Router();

router.get('/' ,merchantController.getAllMercahnts);
router.get('/:id', fetchUser ,merchantController.getMerchant);
router.put('/:id', fetchUser, merchantController.updateMe);
router.delete('/:id', fetchUser ,merchantController.deleteMerchant);


module.exports = router;