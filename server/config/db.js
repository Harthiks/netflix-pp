const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.MYSQL_URI, {
    dialect: 'mysql',
    logging: false, // Set to console.log to see SQL queries
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL Connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectDB };
