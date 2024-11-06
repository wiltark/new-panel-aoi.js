const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 8582;

// Utiliser le middleware CORS
app.use(cors());

// Servir les fichiers statiques du répertoire 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Utiliser les routes API
const apiRoutes = require('./routes/apiRoutes');
app.use(apiRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});