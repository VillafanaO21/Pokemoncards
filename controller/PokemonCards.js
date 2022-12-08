const PokemonCards = require('../controller/PokemonCards');
module.exports.viewAll = function(req,res, ) {
    const PokemonCards = {
        id: 1,
        name: 'Tepig',
        imgae: 'https://staticg.sportskeeda.com/editor/2022/11/224f1-16681562150640-1920.jpg',
        Hp: 60,
        Type: 'Fire',
        description:'It can deftly dodge its foe’s attacks while shooting fireballs from its nose. It roasts berries before it eats them.'
        };
    res.render('index', {PokemonCards});
    }