require('dotenv').config();

const express = require("express");
const cors = require("cors");
const app = express();


//middleware untuk global
app.use(cors());
// kalo pakai cors bisa nyambungin frontend sama backend meskipun beda port
// app.use cors harus lebih dulu dibanding app.use express biasa


// Deklarasikan semua routes
const pesertaRoute = require('./routes/pesertaRoutes');


//middleware unutk parsing JSON body
app.use(express.json());

// panggil route atau prfix API 
app.use('/api/peserta', pesertaRoute); // mount route di url nya 

// handler basic error nya
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({error : err.message || 'Internal Server Error'});
});

// app untuk menjalankan server yang sudah di tambahkan diatas
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server sudah berjalan di ${PORT}`);
}) ;