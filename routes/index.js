var express = require('express');
var router = express.Router();
const PokemonCards = require('../controller/PokemonCards');

/* GET home page. */
router.get('/', PokemonCards.viewAll);
router.get('/edit', PokemonCards.renderEditForm);

module.exports = router;