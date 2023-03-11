const Merchant = require(`${__dirname}/../models/MerchantModel`);

//GET Merchant /getmerchant
exports.getMerchant = async (req, res) => {
    try {
        const merchant = await Merchant.findById(req.user.id).select('-password');
        
        res.status(200).json({
            status: 'success',
            data: {
                merchant,
            },
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
}

// GET /merchants : Retrieve a list of all merchants (login required)
exports.getAllMercahnts = async (req, res) => {
    try {
        const merchants = await Merchant.find();
        //SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: merchants.length,
            data: {
                merchants,
            },
        });


    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

// // GET /merchants/:id : Retrieve a specific merchant by id (login required)
// exports.getMerchant = async (req, res) => {
//     try {
//         const merchant = await Merchant.findById(req.params.id);
//         if (!merchant) {
//             res.status(404).send("Merchant not found");
//         }
//         //SEND RESPONSE
//         res.status(200).json({
//             status: 'success',
//             results: 1,
//             data: {
//                 merchant,
//             },
//         });


//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send("Internal server error");
//     }
// }

// PUT /merchants/:id : Update a specific merchant by id (login required)
exports.updateMe = async (req, res) => {
    try {
        const { name, phone, address, business_name, website_url, logo_url} = req.body;
        const newMerchant = {};
       
        // TODO
        // add all the fields of merchant
        if(name){newMerchant.name = name};
        if(phone){newMerchant.phone = phone};
        if(address){newMerchant.address = address};
        if(business_name){newMerchant.business_name = business_name};
        if(website_url){newMerchant.website_url = website_url};
        if(logo_url){newMerchant.logo_url = logo_url};
        
        newMerchant.updated_on = Date.now();
        let merchant = await Merchant.findById(req.params.id);
        if (!merchant) {
            return res.status(404).send("Not Found");
        }

        if (merchant._id.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        updatedMerchant = await Merchant.findByIdAndUpdate(
            req.params.id,
            { $set: newMerchant },
            { new: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                merchant: updatedMerchant,
            },
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Internal server error");
    }
}

// DELETE /merchants/:id : Delete a specific merchant by id (login required)
exports.deleteMerchant = async (req, res) => {
    try {
        let merchantDel = await Merchant.findById(req.params.id);
        if (!merchantDel) {
            return res.status(404).send("Not Found");
        }
        if (req.merchant.id != req.params.id) {
            res.status(404).send("Not allowed");
        }
        const posts = await Post.deleteMany({ merchant_id: req.params.id });
        const merchant = await Merchant.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Internal server error");
    }
}



// View Coupons 

// Coupons in use

// inactive coupons
