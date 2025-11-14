import { useEffect, useState } from "react";
import axios from "axios";

function Database() {
  const [loading, setLoading] = useState(false);
  const [nama, setNama] = useState("");
  const [peserta, setPeserta] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault(); // supaya form tidak reload halaman
    setLoading(true);
    try {
      const res = await axios.get(
        `http://pblweb01b01.cloud:3011/api/peserta/${nama}`,
        {
          params: { page: 1, limit: 5 },
        }
      );

      setPeserta(res.data.data);
      setTotalPages(res.data.totalPages);
      setPage(1);

      // kalau backend ngirim object langsung, diubah jadi array biar bisa di-map
    } catch (err) {
      alert("Data tidak ditemukan");
    }
    setLoading(false);
  };

  const handleClick = async (e) => {
    e.preventDefault(); // supaya form tidak reload halaman
    setPeserta([]);
    setNama("");
  };

  const fetchData = async () => {
    const res = await axios.get(
      `http://pblweb01b01.cloud:3011/api/peserta/${nama}`,
      {
        params: { page, limit: 5 },
      }
    );
    console.log(res);

    setPeserta(res.data.data);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div class="card card-database text-start mx-auto my-5">
      <div class="card-header">Database</div>
      <div class="card-body">
        {peserta.length == 0 && (
          <form onSubmit={handleSubmit}>
            <div class="d-flex form-floating mb-3">
              <input
                type="text"
                className="form-control me-2"
                id="floatingInput"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
              <label for="floatingInput">
                Nama
              </label>
              <button type="submit" className="btn btn-primary">
                Cari
              </button>
            </div>
          </form>
        )}
        {peserta.length > 0 && (
          <div className="table-wrapper">
            <table className="table table-bordered table-stripped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama</th>
                  <th scope="col" className="">
                    Nik
                  </th>
                  <th scope="col">Perusahaan</th>
                  <th scope="col">Pembinaan</th>
                  <th scope="col">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {peserta.map((item, index) => (
                  <tr key={item.id}>
                    <td>{(page - 1) * 5 + (index + 1)}</td>
                    <td>{item.nama}</td>
                    <td className="">{item.nik}</td>
                    <td>{item.nama_perusahaan}</td>
                    <td>{item.pembinaan}</td>
                    <td>{item.tgl_pembinaan_indo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* pagination  */}
        {peserta.length > 0 && (
          <>
            <div className="float-end">
              <button
                class="btn btn-primary d-md-inline d-none"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Prev
              </button>
              <button
                class="btn btn-primary d-md-none d-inline"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                -
              </button>
              <span>
                {" "}
                Page {page} of {totalPages}{" "}
              </span>
              <button
                class="btn btn-primary d-md-inline d-none"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
              <button
                class="btn btn-primary d-md-none d-inline"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                +
              </button>
            </div>

            <button onClick={handleClick} className="btn btn-success">
              Clear
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default Database;
