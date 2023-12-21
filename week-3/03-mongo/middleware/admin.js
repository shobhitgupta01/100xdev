// Middleware for handling auth
const {Admin} = require('../db/index');

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const admin_found = await Admin.findOne({'username': username})
    if(admin_found && admin_found.password === password){
        console.log(`${username} authenticated`);
        next();
    }
    else{
        res.status(401).json({
            error: "Authentication failed"
        })
    }
}

module.exports = adminMiddleware;