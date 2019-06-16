let mysql = require('mysql');

let mysql_connect = function() {
    console.log('conectando com BD');
    return mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'rco98mysql',
            database: 'portal'
        }
    );
}

module.exports = function() {
    return mysql_connect;
}