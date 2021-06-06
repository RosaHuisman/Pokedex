const client = require('./database-pg');

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
    },

    getTypes: (callback) => {
        client.query('SELECT * FROM type', (error, result) => {
            if (error) {
                callback(error)
            } else {
                callback(null, result.rows)
            }
        })
    },

    getPokemonByType: (name, callback) => {
        const preparedQuery = {
            text: 'SELECT * FROM pokemon JOIN pokemon_type ON pokemon_type.pokemon_numero = pokemon.numero JOIN type ON type.id = pokemon_type.type_id WHERE name=$1',
            values: [name]
        };  
        client.query(preparedQuery, (error, result) => {
            if (error) {
                callback(error);
            } else {
                const pokemons= result.rows
                callback(null, pokemons);
            }
        })
    } 
}

module.exports = dataMapper;

