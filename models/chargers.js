const { Sequelize, DataTypes } = require('sequelize');

class Charger extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            facility: {
                type: DataTypes.STRING(100),
                primaryKey: true,
            },
            address: {
                type: DataTypes.STRING(200),
            },
            startTime_weekday: {
                type: DataTypes.STRING(20),
            },
            endTime_weekday: {
                type: DataTypes.STRING(20),
            },
            startTime_sat: {
                type: DataTypes.STRING(20),
            },
            endTime_sat:{
                type: DataTypes.STRING(20),
            },
            startTime_holi:{
                type: DataTypes.STRING(20),
            },
            endTime_holi: {
                type: DataTypes.STRING(20),
            },
            tel:{
                type: DataTypes.STRING(30),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Charger',
            tableName: 'Chargers',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
};

module.exports = Charger;