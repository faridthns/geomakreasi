import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/img/Logo.png";
// import 'remixicon/fonts/remixicon.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top p-0 navbar-dark">
                <div className="container">
                    <Link className="navbar-brand fw-medium fs-6" to="/">
                        <img src={logo} alt="Logo" className="logo " />
                        &nbsp; GEO MANDIRI GROUP
                    </Link>

                    {/* Toggle button (mobile view) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu Items */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i class="ri-home-2-fill"> BERANDA</i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/database">
                                    <i class="ri-database-2-fill"> DATABASE</i> 
                                </Link>
                            </li>

                            {/* Dropdown */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="bidangDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="ri-briefcase-fill"> PELATIHAN K3</i> 
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="bidangDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/kebakaran">
                                            Penanggulangan Kebakaran
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/las">
                                            Pengelasan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/pesawat">
                                            Pesawat Angkut & Angkat
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/kontak">
                                    <i class="ri-phone-fill"> HUBUNGI KAMI</i> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;