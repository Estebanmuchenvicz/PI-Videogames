const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRoutes = require('./videoGames.js');
const genresRoutes = require('./genresRoutes.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames',videogamesRoutes)
router.use('/genres',genresRoutes)

module.exports = router;
