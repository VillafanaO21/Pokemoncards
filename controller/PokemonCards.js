const PokemonCards = require('../controller/PokemonCards');
module.exports.viewAll = async function(req,res, ) {
    const PokemonCards = await PokemonCards.finAll();
    res.render('index', {PokemonCards});
}