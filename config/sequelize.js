const dotenv = require('dotenv').config() //we need dotenv to keep our DB configs SAFE!!

//define required env variables to set up a connection to out DB
module.exports = {
    development: {
        //host, database, username, password, and dialect 
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dialect: 'mysql',
    }
}