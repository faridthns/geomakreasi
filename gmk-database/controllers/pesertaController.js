const pool = require('../config/db'); // supaya bisa terhubung ke database

module.exports = {
    // GET by Id dari table layanan /api/layanan/:id
    getByNama: async (req, res, next) => {
        try {
            const nama = req.params.nama; // reques nama pakai parse int dan diambil pakai angka desimal (10)
            const limit = parseInt(req.query.limit) || 10; // limit data yang diambil default 10 dat perhalaman
            const page = parseInt(req.query.page) || 1; // halaman data yang diambil default page 1
            const offset = (page - 1) * limit; // offset data yang diambil

            const [rows] = await pool.execute(`select * from peserta_pembinaan  where nama like ? limit ${limit} OFFSET ${offset}`, [`%${nama}%`]);
           
            const [countResult] = await pool.execute('select count(*) as total from peserta_pembinaan where nama like ?', [`%${nama}%`]
            );

            const total = countResult[0].total; // menghitung total data
            const totalPages = Math.ceil(total / limit); // menghitung total halaman

            if (rows.length === 0) return res.status(404).json({ message: 'Maaf tidak ada data' });
            
            res.json({
                data: rows,
                page,
                totalPages,
                total
            });

        } catch (error) {
            next(error);
        }
    }


}