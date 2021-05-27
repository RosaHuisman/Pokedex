const dataMapper = require('../dataMapper');


const mainController = {
    home: (req, res) => {
        dataMapper.getAllPokemon((error, allPokemon) => {
            if (error) {
                console.error(error)
            } else {
                res.render('home', {allPokemon})
            }
        })
        
    },

    pokemonDetails: (req, res) => {
        const pokemonId = Number(req.params.id)

     

        dataMapper.getOnePokemon(pokemonId, (error, pokemon) => {
            if (error) {
                console.error(error)
            } else {
                console.log('Contrôleur, pokemon reçue du DM', pokemon);

                res.render('pokemonDetails', {pokemon})
            }
        })
    }
  
};

module.exports = mainController;