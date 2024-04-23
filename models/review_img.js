const { Sequelize, DataTypes } = require('sequelize');

class Review_Img extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            charger_name: {
                type: DataTypes.STRING(100),
            },
            review_id: {
                type: DataTypes.INTEGER,
            },
            img: {
                type: DataTypes.STRING(100),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Review_Img',
            tableName: 'Review_Imgs',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
};

module.exports = Review_Img;