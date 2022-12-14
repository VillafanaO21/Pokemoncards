const {PokemonCards} = require('../models')
const health = [60];
module.exports.viewAll = async function(req,res, ) {
    const PokemonCards = await PokemonCards.finAll();
    res.render('index', {PokemonCards});
}
router.get('/edit/:id', PokemonCards.renderEditForm);

module.exports.renderEditForm = async function(req, res,) {
    const PokemonCards = await PokemonCards.findByPk(
        req.params.id
    );
    res.render('edit', {PokemonCards, health});
}