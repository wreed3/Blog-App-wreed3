const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_new_password',
    database: 'BlogAppDB'

})


module.exports = db