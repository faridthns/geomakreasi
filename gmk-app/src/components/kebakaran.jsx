function Kebakaran() {
    return (
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col">
                    <div class="card card-kebakaran mb-5">
                        <div class="card-header text-center py-3">
                            <h4 class="mb-0 w-75 mx-auto">Ahli K3 Kebakaran Kelas A</h4>
                        </div>
                        <div class="card-body p-4">
                            <h5>Pelatihan Ahli K3 Penaggulangan Kebakaran Kelas A</h5>
                            <button
                                className="btn btn-warning text-dark"
                                onClick={() => window.location.href = "/detail-kebakaran-A"}>
                                Selengkapnya
                            </button>
                            <div class="text-center mt-3">
                                <p class="text-muted"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card card-kebakaran mb-5">
                        <div class="card-header text-center py-3">
                            <h4 class="mb-0">Koordinator Penanggulangan Kebakaran Kelas B</h4>
                        </div>
                        <div class="card-body p-4">
                            <h5>Pelatihan Koordinator Penanggulangan Kebakaran Tingkat B</h5>
                            <button
                                className="btn btn-warning text-dark"
                                onClick={() => window.location.href = "/detail-kebakaran-B"}>
                                Selengkapnya
                            </button>
                            <div class="text-center mt-3">
                                <p class="text-muted"></p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card card-kebakaran mb-5">
                        <div class="card-header text-center py-3">
                            <h4 class="mb-0">Regu Penanggulangan Kebakaran Kelas C</h4>
                        </div>
                        <div class="card-body p-4">
                            <h5>Pelatihan Petugas Regu Kebakaran Tingkat C</h5>
                            <button
                                className="btn btn-warning text-dark"
                                onClick={() => window.location.href = "/detail-kebakaran-C"}>
                                Selengkapnya
                            </button>
                            <div class="text-center mt-3">
                                <p class="text-muted"> </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-kebakaran mb-5">
                        <div class="card-header text-center py-3">
                            <h4 class="mb-0">Petugas Penanggulangan Kebakaran Kelas D</h4>
                        </div>
                        <div class="card-body p-4">
                            <h5>Informasi Pelatihan Petugas Peran Penaggulangan Kebakaran Tingkat D</h5>
                            <button
                                className="btn btn-warning text-dark"
                                onClick={() => window.location.href = "/detail-kebakaran-D"}>
                                Selengkapnya
                            </button>
                            <div class="text-center mt-3">
                                <p class="text-muted"></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Kebakaran