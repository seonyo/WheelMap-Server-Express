const { Sequelize, DataTypes } = require('sequelize');

class Review extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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
    static associate(db){
        db.Review.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'})
        db.Review.belongsTo(db.Charger, {foreignKey: 'charger_name', targetKey: 'facility', onDelete: 'cascade', onUpdate: 'cascade'})
        db.Review.hasOne(db.Review_Img, { foreignKey: 'review_id', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'})
    }
};

module.exports = Review;