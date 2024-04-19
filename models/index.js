const Sequelize = require('sequelize');
const User = require('./user');
const Favorite = require('./favorite');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.User = User;
db.Favorite = Favorite;

User.init(sequelize);
Favorite.init(sequelize);

module.exports = db;