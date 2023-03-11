const Merchant = require(`${__dirname}/../models/MerchantModel`);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signToken = require(`${__dirname}/../token`);

const saltRounds = 10;

exports.signup = async (req, res) => {
    try {

        const { name, email, password, phone, address, business_name } = req.body;

        if (!name || !email || !password || !business_name || !phone ) {
            return res
                .status(400)
                .json({ message: "Please provide all the fields." });
        }
        const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);

        const mail = await Merchant.findOne({ email });
        
        if (mail) {
            return res
                .status(200)
                .json({ message: "the email is already in use" });
        }
        const newUser = await Merchant.create({
            business_name: req.body.business_name,
            name: req.body.name,
            email: req.body.email,
            password: hashedPwd,
            phone: req.body.phone,
            address: req.body.address
        });

        const token = signToken(newUser._id);

        res.status(201).json({
            status: "success",
            token,
            data: {
                newUser,
            },
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

// POST /auth/login : Login a merchant
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Please provide all the fields." });
        }
        const merchant = await Merchant.findOne({ email });
        if (!merchant) {
            return res.status(500).json({ message: "Incorrect email or password!" });
        }
        const cmp = await bcrypt.compare(req.body.password, merchant.password);
        console.log(cmp);
        if (cmp) {
            const token = signToken(merchant._id);
            return res.status(201).json({
                status: 'success',
                token,
                merchant
            });
        } else {
            return res.status(500).json({ message: "Incorrect email or password!" });
        }


    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

// PUT /auth/changePassword : Update the merchants password
exports.updatePassword = async (req, res) => {
    try {
        const merchantData = await Merchant.findById(req.user.id);
        if (!merchantData) {
            return res.status(500).json({ message: "Authentication failed!" });
        }

        const { newPass, currPass } = req.body;

        // check if the entered current password is correct or not
        const cmp = await bcrypt.compare(req.body.currPass, userData.password);
        if (!cmp) {
            return res.status(500).json({ message: "The current password is incorrect!" });
        }

        // check if the entered current password and new password are same or not
        if (newPass === currPass) {
            return res.status(500).json({ message: "New password cannot be equal to the old password!" });
        }

        // hash the new password
        const hashedPwd = await bcrypt.hash(newPass, saltRounds);

        //updating the user's password
        const newMerchant = {};
        newMerchant.password = hashedPwd;
        newMerchant.updated_on = Date.now();
        updatedMerchant = await Merchant.findByIdAndUpdate(
            req.user.id,
            { $set: newUser },
            { new: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                message: "Password changed successfully!"
            },
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}
