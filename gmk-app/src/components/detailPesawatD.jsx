import us from "../assets/img/papa/posterD.png";
import { FaDownload } from "react-icons/fa6";
import videok3a from "../assets/video/Operator Forklift Kelas 2.mp4";

function DetailPesawatD() {
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
                  download="poster-forklift.png"
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
                Pembinaan & Sertifikasi K3 Operator Forklift Kelas II
              </h1>
              <h5 className="mb-3">
                Informasi Pembinaan & Sertifikasi K3 Operator Forklift
              </h5>
              <p>
                Salah satu potensi kecelakaan yang mungkin timbul di tempat
                kerja adalah forklift, sebagai alat angkut untuk memindahkan
                barang-barang harus dikemudikan oleh operator yang terlatih,
                semua itu dapat dicapai melalui pelatihan-pelatihan yang
                menyangkut teori dan praktek yang diselenggarakan secara
                berkesinambungan dan dibimbing oleh instruktur yang
                berpengalaman.
              </p>
              <p>
                Untuk itu kami bekerjasama dengan Kemnaker RI akan
                menyelenggarakan Pembinaan Operator Forklift. Dalam rangka
                meningkatkan keterampilan para operator Forklift dan memenuhi
                syarat-syarat sesuai dengan Undang Undang Keselamatan Kerja,
                sesuai dengan Peraturan Menteri No. 8 Tahun 2020.
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
export default DetailPesawatD;
