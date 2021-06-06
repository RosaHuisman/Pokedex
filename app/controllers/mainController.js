//const dataMapper = require('../dataMapper');

require('dotenv').config();

const {
    types
} = require('pg');
const {
    Pokemon,
    Type
} = require('../models');



const mainController = {
    home: (req, res) => {
        Pokemon.findAll().then(allPokemon => {
            res.render('home', {
                allPokemon
            })
        }).catch(error => {
            console.log('On a eu un pépin', error);
        });
    },

    pokemonDetails: (req, res) => {
        const pokemonId = Number(req.params.id)
        console.log('id du pokemon :' + pokemonId)
        Pokemon.findByPk(pokemonId, {
            include: 'types'
        }).then(pokemon => {
            res.render('pokemonDetails', {
                pokemon
            })
        }).catch(error => {
            console.log('On a eu un pépin', error);
        });

    },

    typePage: (req, res) => {
        Type.findAll().then(types => {
            res.render('allTypes', {
                types
            })
        }).catch(error => {
            console.log('On a eu un pépin', error);
        });
    },


    pokemonsOfOneType: (req, res) => {
        const type = req.params.type;
        Pokemon.findAll({
            include: [{
                model: Type,
                as: 'types',
                where: {name: type}
            }]
        }).then(pokemons => {
            console.log(pokemons)
            res.render('typeDetails', {
                pokemons, type
            })
        }).catch(error => {
            console.log('On a eu un pépin', error);
        });

    },

};

module.exports = mainController;