const sequelizePackage = require('sequelize');
const allConfig = require('../config/config')

const initUsersModel = require('./usersModel')
const initTasksModel = require('./tasksModel')

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'production';
const config = allConfig[env];
const db = {};

let sequelize

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        dialect: process.env.DB_DIALECT
    })
} else {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
}

db.Users = initUsersModel(sequelize, Sequelize.DataTypes);
db.Tasks = initTasksModel(sequelize, Sequelize.DataTypes);

// creates a method in the
// user object with getSentMessages, etc.
// allows the use of include with sentMessages
db.Users.hasMany(db.Tasks);
db.Tasks.belongsTo(db.Users);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db