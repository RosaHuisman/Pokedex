const sequelize = require('../database');

const {Model, DataTypes} = require('sequelize');

class Pokemon extends Model {
    
    debug() {
        return `Pokemon with id ${this.id} : ${this.nom}`;
    }
}

Pokemon.init({
    nom: DataTypes.STRING,
    pv: DataTypes.INTEGER,
    attaque: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    attaque_spe: DataTypes.INTEGER,
    defense_spe: DataTypes.INTEGER,
    vitesse: DataTypes.INTEGER,
    numero: DataTypes.INTEGER,
}, {
    sequelize,
    tableName: 'pokemon'
})

module.exports = Pokemon;