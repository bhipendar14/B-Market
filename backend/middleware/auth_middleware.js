const jwt = require("jsonwebtoken");

const authCheck = (req, res, next) => {
const authHeader = req.headers.authorization;

if (!authHeader) {
    return res.status(401).json({ message: "Access denied. No token provided." });
}

const token = authHeader.split(" ")[1];
try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    next();
} catch (err) {
    return res.status(403).json({ message: "Invalid token." });
}
};

module.exports = authCheck;
