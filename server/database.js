/*
	Create connecion to the database
*/
const mysql = require('promise-mysql');
const keys = require('./keys');

// create bluebird pool promise
var pool = mysql.createPool(keys.database);

pool.then(connection => {
        connection.on('connection', () => {
            console.log('Connection stablished');
        })
        
        connection.on('acquire', () => {
            console.log('Acquire connection');
        })

        connection.on('release', () => {console.log('Connection Released')});

        console.log('Pool Promise Created');
    });

module.exports = pool;