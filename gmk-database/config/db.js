require('dotenv').config(); // load .env

const mysql = require('mysql2/promise'); // pakai mysql2 untuk bisa pakai promise

// parse db_url di .env
const dbURL = process.env.DATABASE_URL;
if (!dbURL) { // kalo dburl gaada maka akan muncul error
    throw new error('database_url belum di set di env');

}

const url = new URL(dbURL); //  dbURL di sederhanakan jadi url

// buat pool unutk tempat koneksi nya
const pool = mysql.createPool({
    host                : url.hostname,
    user                : url.username,
    password            : url.password,
    database            : url.pathname.replace(/^\//, ''), // buat path tanpa loading slash
    port                : url.port ? Number(url.PORT) : 3306,
    waitForConnections  : true,
    connectionLimit     : 4, // buat limit tapi ga wajib
    queueLimit          : 0,
});

module.exports = pool;