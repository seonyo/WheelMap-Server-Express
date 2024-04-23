const { Sequelize, DataTypes } = require('sequelize');

class Review_Img extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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
    static associate(db){
        db.Review_Img.belongsTo(db.Charger, { foreignKey: 'charger_name', targetKey: 'facility', onDelete: 'cascade', onUpdate: 'cascade'})
        db.Review_Img.belongsTo(db.Review, { foreignKey: 'review_id', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'})
    }
};

module.exports = Review_Img;