const Sequelize = require('sequelize');
const User = require('./user');
const Favorite = require('./favorite');
const Review = require('./review');
const Review_Img = require('./review_img');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.User = User;
db.Favorite = Favorite;
db.Review = Review;
db.Review_Img = Review_Img;

User.init(sequelize);
Favorite.init(sequelize);
Review.init(sequelize);
Review_Img.init(sequelize);

module.exports = db;