const express = require("express");
const fetchUser = require(`${__dirname}/../middlewares/fetchUser`);
const authController = require(`${__dirname}/../controllers/authController`);

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.put("/changePassword", fetchUser, authController.updatePassword);

module.exports = router;