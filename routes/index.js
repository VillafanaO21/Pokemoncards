var express = require('express');
var router = express.Router();
const PokemonCards = require('../controller/PokemonCards');

/* GET home page. */
router.get('/', PokemonCards.viewAll);
router.get('/edit/:id', PokemonCards.renderEditForm);
router.post('/edit/:id', PokemonCards.updatesPokemonCards);
router.get('/delete/:id', PokemonCards.deletePokemonCards);
router.get('/add', PokemonCards.renderAddForm);
router.get('/add', PokemonCards.addPokemonCards);
module.exports = router;