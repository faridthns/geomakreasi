import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app.css"; // custom CSS kamufa;
import bg from "../assets/img/bg.jpg";
import cr1 from "../assets/img/cr1.jpg";
import cr2 from "../assets/img/cr2.jpg";
import cr4 from "../assets/img/cr4.jpg";
import cr5 from "../assets/img/cr5.jpg";
import cr6 from "../assets/img/cr6.jpg";
import us from "../assets/img/us.png";
import cl1 from "../assets/img/client1.png";
import cl3 from "../assets/img/client3.png";
import cl4 from "../assets/img/client4.png";
import cl5 from "../assets/img/client5.png";
import cl6 from "../assets/img/client6.png";
import cl7 from "../assets/img/client7.png";
import cl8 from "../assets/img/client8.png";
import cl9 from "../assets/img/client9.png";
import cl10 from "../assets/img/client10.png";

function Beranda() {
  return (
    <>
      {/* Hero Carousel */}
      <section className="hero-section d-flex align-items-center justify-content-center">
        <div className="container py-4">
          <Carousel className="carousel-hero">
            <Carousel.Item>
              <img className="d-block" src={cr1} alt="slide3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={cr2} alt="slide3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={cr4} alt="slide3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={cr5} alt="slide3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={cr6} alt="slide3" />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* About K3 Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Gambar About */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={us}
                alt="Tentang K3"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Teks About */}
            <div className="col-md-6">
              <h2 className="mb-4">Tentang Kami</h2>
              <p>
                Website K3 hadir sebagai pusat informasi dan pelatihan
                Keselamatan dan Kesehatan Kerja. Kami berkomitmen meningkatkan
                kesadaran serta kompetensi tenaga kerja melalui pelatihan
                bersertifikasi, informasi regulasi, dan layanan konsultasi.
              </p>
              <p>
                Dengan dukungan instruktur berpengalaman serta program resmi
                dari Kementerian Ketenagakerjaan, kami siap menjadi mitra
                terpercaya Anda dalam menciptakan lingkungan kerja yang aman,
                sehat, dan produktif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Bidang */}
      <section className="bidang-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div
                className="card card-bidang text-center text-white shadow"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              >
                <h4 className="mb-0 mt-4">Bidang Penanggulangan Kebakaran</h4>
                <div className="card-body p-4">
                  <button
                    className="btn btn-warning text-dark"
                    onClick={() => (window.location.href = "/kebakaran")}
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div
                className="card card-bidang text-center text-white shadow"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              >
                <h4 className="mb-0 mt-4">Bidang Pengelasan</h4>
                <div className="card-body p-4">
                  <button
                    className="btn btn-warning text-dark"
                    onClick={() => (window.location.href = "/las")}
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div
                className="card card-bidang text-center text-white shadow"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              >
                <h4 className="mb-0 mt-4">Bidang Pesawat Angkut & Angkat</h4>
                <div className="card-body p-4">
                  <button
                    className="btn btn-warning text-dark"
                    onClick={() => (window.location.href = "/pesawat")}
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Berjalan */}
      <div class="marquee">
        <div class="marquee-content">
          <div className="marquee-group">
            <img src={cl1} alt="logo1" />
            <img src={cl3} alt="logo1" />
            <img src={cl4} alt="logo1" />
            <img src={cl5} alt="logo1" />
            <img src={cl6} alt="logo1" />
            <img src={cl7} alt="logo1" />
            <img src={cl8} alt="logo1" />
            <img src={cl9} alt="logo1" />
            <img src={cl10} alt="logo1" />
          </div>

          <div className="marquee-group">
            <img src={cl1} alt="logo1" />
            <img src={cl3} alt="logo1" />
            <img src={cl4} alt="logo1" />
            <img src={cl5} alt="logo1" />
            <img src={cl6} alt="logo1" />
            <img src={cl7} alt="logo1" />
            <img src={cl8} alt="logo1" />
            <img src={cl9} alt="logo1" />
            <img src={cl10} alt="logo1" />
          </div>

          <div className="marquee-group">
            <img src={cl1} alt="logo1" />
            <img src={cl3} alt="logo1" />
            <img src={cl4} alt="logo1" />
            <img src={cl5} alt="logo1" />
            <img src={cl6} alt="logo1" />
            <img src={cl7} alt="logo1" />
            <img src={cl8} alt="logo1" />
            <img src={cl9} alt="logo1" />
            <img src={cl10} alt="logo1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Beranda;
