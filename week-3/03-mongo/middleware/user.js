const {User} = require('../db/index');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const userFound = await User.findOne({'username':username, 'password': password});
    if(!userFound){
        res.status(401).json({
            error: "Authentication failed"
        });
        return;
    }
    else{
        next();
    }
}

module.exports = userMiddleware;