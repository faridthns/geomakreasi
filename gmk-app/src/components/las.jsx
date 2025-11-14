import us from "../assets/img/las/las.png";
import { FaDownload } from "react-icons/fa6";
import videok3a from "../assets/video/K3 Pengelasan.mp4";

function las() {
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
                  download="poster-las.png"
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
              <h1 className="mb-4">Pelatihan Ahli K3 Juru Las</h1>
              <h5 className="mb-3">Informasi Pelatihan Ahli K3 Juru Las</h5>
              <p>
                Bahwa dengan kemajuan teknologi dewasa ini, khususnya dalam
                bidang las (welding) diperlukan tingkat keterampilan juru las
                yang memadai, untuk itu seorang juru las harus mempunyai
                kualifikasi keahlian sebagai juru las ditempat kerja sesuai
                dengan Peraturan Menteri Tenaga Kerja dan Transmigrasi :
                PER/02/1982
              </p>
              <p>
                1. Undang-Undang Nomor 1 Tahun 1970 tentang Keselamatan Kerja.{" "}
                <br />
                2. Peraturan Menteri Tenaga Kerja Republik Indonesia No. 2 Tahun
                1982 tentang Kualifikasi Juru Las ditempat kerja.
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
export default las;
