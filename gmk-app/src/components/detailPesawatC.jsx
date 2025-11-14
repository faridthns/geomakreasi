import us from "../assets/img/papa/posterC.png";
import { FaDownload } from "react-icons/fa6";
import videok3a from "../assets/video/k3A.mp4";

function DetailPesawatC() {
  return (
    <>
      <section className="about-section py-5">
        <div className="container">
          <div className="row px-4 align-items-center justify-content-center">
            {/* Gambar About */}
            <div className="col-md-4 order-2 order-md-1 mb-4 me-0 mb-md-0 me-md-5">
              <div className="position-relative image-wrapper">
                <img
                  src={us}
                  alt="Tentang K3"
                  className="img-fluid rounded shadow"
                />
                <a
                  href={us}
                  download="poster-excavator.png"
                  className="download-btn position-absolute top-50 start-50 translate-middle"
                >
                  <button className="btn btn-primary d-flex align-items-center">
                    <FaDownload /> &nbsp;Download Foto
                  </button>
                </a>
              </div>
            </div>

            {/* Teks About */}
            <div className="col-md-6 order-1 order-md-2">
              <h1 className="mb-4">Pelatihan Ahli K3 Alat Berat (Excavator)</h1>
              <h5 className="mb-3">
                Informasi Pelatihan Ahli K3 Operator Alat Berat Excavator
              </h5>
              <p>
                Dengan meningkatnya pembangunan dan teknologi di bidang
                industri, penggunaan pesawat angkat dan angkut merupakan bagian
                integral dalam pelaksanaan dan peningkatan proses produksi.
                Dalam pembuatan, pemasangan, pemakaian perawatan pesawat angkat
                angkut mengandung bahaya potensial sehingga perlu adanya
                perlindungan atas keselamatan dan kesehatan kerja setiap tenaga
                kerja yang melakukan pembuatan, pemasangan, pemakaian,
                persyaratan pesawat angkat angkut.
              </p>
            </div>
          </div>
          <div class="card-body p-4">
            <div class="video-container">
              <video
                src={videok3a}
                controls
                width="90%"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* About K3 Section */}
    </>
  );
}
export default DetailPesawatC;
