const {PokemonCards} = require('../models')
const health = [60];
module.exports.viewAll = async function(req,res, ) {
    const PokemonList = await PokemonCards.findAll();
    res.render('index', {PokemonList});
}

module.exports.renderEditForm = async function(req, res,) {
    const Pokemon = await PokemonCards.findByPk(
        req.params.id
    );
    res.render('edit', {PokemonCards, health});
}

module.exports.updatesPokemonCards = async function(req, res) {
    await Restaurant.update(
        {
            name: req.body.name,
            PowerName: req.body.PowerName,
            PowerDMG: req.body.PowerDMG,
            Weakness: req.body.Weakness,
            Resistance: req.body.Resistance,
            RetreatCost: req.body.RetreatCost,
            PokemonPic: req.body.PokemonPic,
            PowerName2: req.body.PowerName2,
            PowerDMG2: req.body.PowerDMG2,
            orb1: req.body.orb1,
            orb2: req.body.orb2,
            Type: req.body.Type,
            orb3: req.body.orb3,
            orb4: req.body.orb4,
            orb5: req.body.orb5,
            orb6: req.body.orb6,
            Health: req.body.Health,
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}
module.exports.addPokemonCards = async function(req, res) {
    await PokemonCards.create(
     {
        where:
        {
            id: req.params.id,
            PowerName: req.body.PowerName,
            PowerDMG: req.body.PowerDMG,
            Weakness: req.body.Weakness,
            Resistance: req.body.Resistance,
            RetreatCost: req.body.RetreatCost,
            PokemonPic: req.body.PokemonPic,
            PowerName2: req.body.PowerName2,
            PowerDMG2: req.body.PowerDMG2,
            orb1: req.body.orb1,
            orb2: req.body.orb2,
            Type: req.body.Type,
            orb3: req.body.orb3,
            orb4: req.body.orb4,
            orb5: req.body.orb5,
            orb6: req.body.orb6,
            Health: req.body.Health,
        }
     });
    res.render('/');
}
moduel.exports.renderAddForm = function(req, res){
    const PokemonCards = {
        name: "",
        PowerName: "",
        PowerDMG: ""
        Weakness: "",
        Resistance: "",
        RetreatCost: "",
        PokemonPic: "",
        PowerName2: "",
        PowerDMG2: "",
        orb1: "",
        orb2: "",
        Type: "",
        orb3: "",
        orb4: "",
        orb5: "",
        orb6: "",
        Health: "",
    }
}