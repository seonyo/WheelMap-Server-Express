const { Sequelize, DataTypes } = require('sequelize');

class Review extends Sequelize.Model {
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
            starrating: {
                type: DataTypes.INTEGER,
            },
            contents: {
                type: DataTypes.TEXT,
            },
            date:{
                type: DataTypes.DATE,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Review',
            tableName: 'Reviews',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
};

module.exports = Review;