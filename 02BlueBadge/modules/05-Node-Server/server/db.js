//Sequelize documentation: https://sequelize.org/master/manual/getting-started.html#test-the-connection

const Sequelize = require('sequelize');

//Option 1: Passing paramets separately

// const sequelize = new Sequelize('database', 'username', 'password', {
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'     /*choose one of these 'mysql'  | 'mariadb' | 'postgres' | 'mssql'  */
});

sequelize
    .authenticate()
    .then(()=> {
        console.log("Connection has been established successfully.")
    })
    .catch(err=> {
        console.error("Unable to connect to the database:", err);
    });

module.exports = sequelize;