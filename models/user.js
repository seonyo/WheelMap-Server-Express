const { Sequelize, DataTypes } = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING(45),
                unique: true,
            },
            password: {
                type: DataTypes.STRING(100),
            },
            profile: {
                type: DataTypes.STRING(100),
            },
            nickname: {
                type: DataTypes.STRING(30),
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
};

module.exports = User;