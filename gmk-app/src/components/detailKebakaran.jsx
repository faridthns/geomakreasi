import us from "../assets/img/kebakaran/posterA.png";
import { FaDownload } from "react-icons/fa6";
import videok3a from '../assets/video/k3A.mp4'


function DetailKebakaran() {
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
                                    download="poster-a1.png"
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
                            <h1 className="mb-4">Pelatihan Ahli K3 Penaggulangan Kebakaran Kelas A</h1>
                            <h5 className="mb-3">Informasi Pelatihan Ahli K3 Spesiali Kebakaran Tingkat A - SERTIFIKASI KEMNAKER RI</h5>
                            <p >
                                Sesuai dengan Keputusan Menteri Tenaga Kerja RI No: KEP.186/MEN/1999 tentang Penanggulangan Kebakaran di tempat kerja,
                                pengurus dan pengusaha wajib mencegah, mengurangi,
                                dan memadamkan kebakaran latihan penanggulangan kebakaran di tempat kerja.
                                Termasuk dalam hal kewajiban mencegah, mengurangi dan memadamkan kebakaran
                                ini adalah pembentukan Unit Penanggulangan Kebakaran di tempat kerja dan menyelenggarakan pelatihan
                                dan gladi Penanggulangan Kebakaran secara berkala. Unit Penanggulangan Kebakaran tersebut terdiri dari :
                            </p>
                            <p>
                                Petugas Peran Kebakaran
                                Regu Penanggulangan Kebakaran
                                Koordinator Unit Penaggulangan Kebakaran
                                Ahli K3 Spesialis Penanggulangan Kebakaran sebagai penanggung jawab teknis
                            </p>
                            <p>
                                Ahli K3 Spesialis Penanggulangan Kebakaran ini di WAJIB kan
                                untuk tempat kerja tingkat resiko bahaya kebakaran ringan dan
                                sedang I yang mempekerjakan tenaga kerja 300 orang atau lebih atau
                                setiap tempat kerja resiko bahaya kebakaran tingkat sedang II, sedang III atau berat.
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
export default DetailKebakaran;