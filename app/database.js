// dans ce module, on a "juste" besoin de la classe sequalize incluse dans le package, on n'a pas besoin des autres fonctionnalités du package. 
const { Sequelize } = require('sequelize');

// sous le capot, sequalize vca utiliser le package PG qu'on connait. Cest pour ca qu'il faut l'avoir installé dans le projet, on n'a plus besoin de le require nous meme.  

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        // on ajoute cette propriété pour désactiver l'ajout automqtique des champs : 
        // - createdAt
        //- updateAt
        timestamps: false,
        // permet les noms en snake_case
        underscored: true
    }
});

// notre client est pret, on exporte le module pour pouvoir l'utiliser dans l'appli
module.exports = sequelize; 
