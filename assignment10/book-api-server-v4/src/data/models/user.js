const { password } = require('pg/lib/defaults');
const { Sequelize, DataTypes } = require('sequelize');

module.exports =(sequelize)=>{
    sequelize.define(
        "user",{

            username:{
                type: DataTypes.STRING,
                notNull: true
            },
            email:{
                type: DataTypes.STRING,
                primaryKey: true
            },
            password: DataTypes.STRING,
            photograph: DataTypes.STRING

        }
    )
}


// username 
// email primaryKey
// password
// photograph