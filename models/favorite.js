const { Sequelize, DataTypes } = require('sequelize');

class Favorite extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
            },
            charger_name: {
                type: DataTypes.STRING(100),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Favorite',
            tableName: 'Favorites',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
};

module.exports = Favorite;