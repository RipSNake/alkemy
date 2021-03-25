/*
	Create connecion to the database
*/
const mysql = require('mysql');
const keys = require('./keys');

const pool = mysql.createPool(keys.database);

if(pool.getConnection( (err, con) => {
    if (err) throw err;
    con.release();
    console.log('Db connected');
}));
    

module.exports = pool;


/*

// Trying to work with promise-mysql npm (uses bluebird promises)
const mysql = require('promise-mysql');
const keys = require('./keys');

const pool = mysql.createPool(keys.database);

pool.then(connection => {
		connection.on('connection', () => {
			console.log('Connection stablished');
        })
        
        connection.on('acquire', () => {
        	console.log('Acquire connection');
        })

        connection.on('release', () => {console.log('Connection Released')});

        console.log('DB is Connected');
    });
*/