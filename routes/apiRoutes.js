// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { client } = require('../index'); // Importer le client bot

// Route protégée par le token
router.get('/api/data', verifyToken, (req, res) => {
    res.json({ message: 'Access granted to API!' });
});

// Route pour obtenir les informations du bot
router.get('/api/bot-info', verifyToken, (req, res) => {
    const botInfo = {
        username: client.user.username,
        id: client.user.id,
        guildCount: client.guilds.cache.size,
        uptime: client.uptime,
        ping: client.ws.ping
    };
    res.json(botInfo);
});

module.exports = router;