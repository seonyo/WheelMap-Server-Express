const { Sequelize, DataTypes } = require('sequelize');
const { associate } = require('./user');

class Favorite extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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
    static associate(db){
        db.Favorite.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'})
        db.Favorite.belongsTo(db.Charger, { foreignKey: 'charger_name', targetKey: 'facility', onDelete: 'cascade', onUpdate: 'cascade'})
    }
};

module.exports = Favorite;