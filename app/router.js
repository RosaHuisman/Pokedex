//on importe le module express
const express = require('express');
//on crée le routeur
const router = express.Router();

const mainController = require('./controllers/mainController');


router.get('/', mainController.home);
router.get('/pokemon/:id', mainController.pokemonDetails);
router.get('/types', mainController.typePage);
router.get('/type/:type', mainController.pokemonsOfOneType);



//route par défaut, en cas d'erreur
router.use((request, response) => {
    response.render('404');
});



module.exports = router;