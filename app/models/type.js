const sequelize = require('../database');

const {Model, DataTypes} = require('sequelize');

class Type extends Model {

    debug() {
        return `Type with id ${this.id} : ${this.name}`;
    }
}

Type.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
}, {
    sequelize,
    tableName: 'type'
})


module.exports = Type;