import us from "../assets/img/papa/posterB.png";
import { FaDownload } from "react-icons/fa6";
import videok3a from "../assets/video/k3A.mp4";

function DetailPesawatB() {
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
                  download="poster-papa2.png"
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
              <h1 className="mb-4">
                Pelatihan Ahli K3 Pesawat Angkat & Pesawat Angkut
              </h1>
              <h5 className="mb-3">
                Informasi Pelatihan Ahli K3 Pesawat Angkat & Pesawat Angkut
              </h5>
              <p>
                Tingginya tingkat kecelakaan kerja di dunia industri atas
                penggunaan pesawat angkat angkut, membutuhkan keahlian yang
                handal oleh seorang Teknisi Pesawat Angkat dan Angkut yang
                memiliki l isensi untuk memeriksa dan memelihara peralatan
                angkat angkut tetap baik di gunakan dan mengurangi resiko
                terjadi kecelakaan kerja sebelum digunakan oleh Operator Pesawat
                Angkat dan Pesawat Angkut.
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
export default DetailPesawatB;
