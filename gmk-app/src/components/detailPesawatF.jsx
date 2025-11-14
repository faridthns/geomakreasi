import us from "../assets/img/papa/posterF.png";
import { FaDownload } from "react-icons/fa6";
import videok3a from "../assets/video/Crane kelas 3.mp4";

function DetailPesawatF() {
  return (
    <>
      <section className="about-section py-5">
        <div className="container ">
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
                  download="poster-scissor-lift.png"
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
                Pembinaan & Sertifikasi K3 Operator Overhead Crane
              </h1>
              <h5 className="mb-3">
                Informasi Pembinaan & Sertifikasi K3 Operator Overhead Crane
              </h5>
              <p>
                Dengan adanya peningkatan kemampuan teknis bagi Operator Overhead Crane, 
                diharapkan mampu menurunkan angka kecelakaan kerja, 
                sehingga sasaran pembinaan dan pengawasan sesuai sebagaimana 
                yang diamanatkan dalam UU No. 1 Tahun 1970 tentang Keselamatan Kerja dapat tercapai dan mengenai sasaran.
              </p>
              <h5>PEMBAGIAN KELAS OPERATOR OVERHEAD CRANE</h5>
              <p>
                1. Kelas I Pengoperasian Beban kurang dari 100 ton <br/>
                2. Kelas II Pengoperasian Beban 25 - 100 ton<br/>
                3. Kelas III Pengoperasian beban sampai 25 ton
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
export default DetailPesawatF;
