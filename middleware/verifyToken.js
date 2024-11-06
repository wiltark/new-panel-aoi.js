// middleware/verifyToken.js
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    const secretToken = 'YOUR_SECRET_TOKEN'; // Remplacez par votre propre token secret

    if (token === secretToken) {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
}

module.exports = verifyToken;