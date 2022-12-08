var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', PokemonCards.viewAll);

module.exports = router;