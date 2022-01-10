const {Sequelize, DataTypes} = require('sequelize');

module.exports=(sequelize)=>{
    //console.log('Building the model author');
    sequelize.define("author",
        {
            name: {
                type: DataTypes.STRING,
                notNull: true
            },
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            biography: DataTypes.STRING(5000),
            photograph: DataTypes.STRING

        })
}