import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/img/Logo.png";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import logofooter from "../assets/img/logofooter1.png";

function Footer() {
  return (
    <>
      <footer className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-9">
              <div className="row gap-4">
                <div className="text-start col-md-4">
                  <h5>
                    <Link className="navbar-brand fw-medium fs-6" to="/">
                      <img src={logo} alt="Logo" className="logo " />
                      &nbsp; GEO MANDIRI GROUP
                    </Link>
                  </h5>
                  <p>
                    Melayani dengan profesionalisme dan integritas untuk
                    keselamatan kerja di Indonesia.
                  </p>
                </div>

                <div className="col-md-3 text-start pt-2">
                  <h5>Tautan Cepat</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/" className="list-tc text-white-50 text-decoration-none">
                        Beranda
                      </a>
                    </li>
                    <li>
                      <a
                        href="/database"
                        className="list-tc text-white-50 text-decoration-none"
                      >
                        Database
                      </a>
                    </li>
                    <li>
                      <a
                        href="/kontak"
                        className="list-tc text-white-50 text-decoration-none"
                      >
                        Hubungi Kami
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 text-start pt-2">
                  <h5>Kontak</h5>
                  <ul className="list-unstyled">
                    <li>
                      <FaPhone className="me-2" /> 088213739145 (Afika)
                    </li>
                    <li>
                      <FaEnvelope className="me-2" /> afika.nashwa.shafira@gmail.com
                    </li>
                    <li>
                      <FaMapMarkerAlt className="me-2" /> Jakarta, Indonesia
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/geomakreasi"
                        className="text-decoration-none"
                      >
                        <FaInstagram className="me-2" /> @geomakreasi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

           <div className="col-md-3 mb-4 mb-md-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123745057063!2d106.90189587265004!3d-6.247419945003204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f32b83252e77%3A0xd4495dbdb34e3f71!2sGeo%20Mandiri%20Kreasi.%20PT!5e0!3m2!1sid!2sid!4v1759725215929!5m2!1sid!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-4"
              ></iframe>
            </div>

          </div>
          <div className="text-md-start">
            <img
              src={logofooter}
              alt="Logo Footer"
              className="logo-footer"
            />
          </div>
          <hr className="my-4 bg-light" />
          <div className="">
            <p className="mb-0 text-center">
              &copy; 2025 Geomandirigroup | Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
