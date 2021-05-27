const client = require('./database');

const dataMapper = {

    getAllPokemon: (callback) => {
        client.query('SELECT * FROM pokemon', (error, result) => {
            if (error) {
                callback(error)
            } else {
                const allPokemon = result.rows;
                callback(null, allPokemon);
            }
        });
    },

    getOnePokemon: (numero, callback) => {
        
        const preparedQuery = {
            text: 'SELECT * FROM pokemon JOIN pokemon_type ON pokemon_type.pokemon_numero = pokemon.numero JOIN type ON type.id = pokemon_type.type_id WHERE numero=$1',
            values: [numero]
        };
        
        
        client.query(preparedQuery, (error, result) => {
            if (error) {
                callback(error) 
            } else {
                if (result.rows.length > 0) {
                    const pokemon = result.rows;
                    callback(null, pokemon);
                } else {
                    callback(`Pokemon d'id ${id} inexistante`);
                }

            } 
        })

    }
}

module.exports = dataMapper;

