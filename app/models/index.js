const Pokemon = require('./pokemon');
const Type = require('./type');


// Entre Pokemon et Type (n,n)
Type.belongsToMany(Pokemon, {
    foreignKey: 'type_id',
    otherKey: 'pokemon_id',
    as: 'pokemons',
    through: 'pokemon_type'
});

Pokemon.belongsToMany(Type, {
    foreignKey: 'pokemon_id',
    otherKey: 'type_id',
    // le nom de la propriété dans Pokemon si on fait un JOIN
    as: 'types',
    // on indique le nom de la table intermédiaire
    through: 'pokemon_type'
});




module.exports = {
    Pokemon,
    Type
}