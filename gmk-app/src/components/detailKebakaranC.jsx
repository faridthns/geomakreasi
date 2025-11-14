import us from "../assets/img/kebakaran/posterC.png";
import { FaDownload } from "react-icons/fa6";
import videok3c from "../assets/video/k3C.mp4";

function DetailKebakaranC() {
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
                  download="poster-a3.png"
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
                Pelatihan Ahli K3 Penaggulangan Kebakaran Kelas C
              </h1>
              <h5 className="mb-3">
                Pelatihan Petugas Regu Kebakaran Tingkat C
              </h5>
              <h5 className="mb-3">
                Informasi Pelatihan Petugas Regu Kebakaran Tingkat C
              </h5>
              <p>
                Sesuai dengan keputusan Menteri Tenaga Kerja RI No: KEP.
                186/MEN/1999 tentang Penganggulangan Kebakaran di tempat kerja,
                pengurus dan pengusaha wajib mencegah, mengurangi, dan
                memadamkan kebakaran latihan penanggulangan kebakaran di tempat
                kerja. Termasuk dalam hal kewajiban mencegah, mengurangi dan
                memadamkan kebakaran ini adalah pembentukan unit penanggulangan
                kebakaran di tempat kerja dan menyelenggarakan pelatihan dan
                gladi penanggulangan kebakaran secara berkala. Unit
                Penganggulangan Kebakaran tersebut terdiri dari :
              </p>
              <p>
                1. Petugas Peran Penanggulangan Kebakaran <br />
                2. Regu Penanggulangan Kebakaran <br />
                3. Koordinator Unit Penanggulangan Kebakaran <br />
                4. Ahli K3 Spesialis Penanggulangan Kebakaran sebagai penanggung
                jawab teknis
              </p>
            </div>
          </div>
          <div class="card-body p-4">
            <div class="video-container">
              <video
                src={videok3c}
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
export default DetailKebakaranC;
