const jwt = require('jsonwebtoken');
const env = require('dotenv');
const path = require('path')
env.config({ path: './.env' });
const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req, res, next) => {

    // Get the user from the jwt token and add to request object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({error: "Please authenticate using a valid token"});
    }
    
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();

    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token"});
    }

}

module.exports = fetchuser
