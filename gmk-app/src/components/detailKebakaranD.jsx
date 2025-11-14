import us from "../assets/img/kebakaran/posterD.png";
import { FaDownload } from "react-icons/fa6";
import videok3d from "../assets/video/k3D.mp4";

function DetailKebakaranB() {
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
                  download="poster-a4.png"
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
                Pelatihan Ahli K3 Penaggulangan Kebakaran Kelas D
              </h1>
              {/* <h5 className="mb-3">Pelatihan Petugas Peran Penaggulangan Kebakaran Tingkat D</h5> */}
              <h5 className="mb-3">
                Informasi Pelatihan Petugas Peran Penaggulangan Kebakaran
                Tingkat D
              </h5>
              <p>
                Kebakaran merupakan suatu ancaman bagi keselamatan manusia,
                harta benda maupun lingkungan. Dengan adanya perkembangan dan
                kemajuan pembangunan yang semakin pesat, resiko terjadinya
                kebakaran semakin meningkat, terutama pada perusahaan atau
                industri. Sehingga, apabila terjadi kebakaran membutuhkan
                penanganan secara khusus. Salah satu penanganannya yaitu dengan
                adanya petugas penanggulangan kebakaran yang bertugas sesuai
                dengan Keputusan Menteri Ketenagakerjaan RI No. 186/Men/1999
                tentang Unit Penanggulangan Kebakaran di tempat kerja.
              </p>
              <p>
                Berdasarkan Keputusan Menteri Ketenagakerjaan RI No.
                186/Men/1999 tentang Unit Penanggulangan Kebakaran di tempat
                kerja, Petugas Penanggulangan Kebakaran terdiri dari:
              </p>
              <p>
                1. Petugas Peran Kebakaran (Kelas D) <br />
                2. Regu Penanggulangan Kebakaran (Kelas C) <br />
                3. Koordinator Unit Penanggulangan Kebakaran (Kelas B) <br />
                4. Ahli K3 Spesialis Penanggulangan Kebakaran sebagai Penanggung
                jawab Teknis Kelas (A)
              </p>
            </div>
          </div>
          <div class="card-body p-4">
            <div class="video-container">
              <video
                src={videok3d}
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
export default DetailKebakaranB;
