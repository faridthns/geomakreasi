import { Routes, Route } from "react-router-dom";
import Beranda from "./beranda";
import Kebakaran from "./kebakaran";
import Las from "./las";
import Pesawat from "./pesawat";
import Database from "./database";
import Kontak from "./kontak";
import DetailKebakaran from "./detailKebakaran";
import DetailKebakaranB from "./detailKebakaranB";
import DetailKebakaranC from "./detailKebakaranC";
import DetailKebakaranD from "./detailKebakaranD";
import DetailPesawatA from "./detailPesawatA";
import DetailPesawatB from "./detailPesawatB";
import DetailPesawatC from "./detailPesawatC";
import DetailPesawatD from "./detailPesawatD";
import DetailPesawatE from "./detailPesawatE";
import DetailPesawatF from "./detailPesawatF";

function AppRoutes() {
    return(
        <div className="">
            <Routes>    
                <Route path="/" element={<Beranda/>}/>
                <Route path="/kebakaran" element={<Kebakaran/>}/>
                <Route path="/las" element={<Las/>}/>
                <Route path="/pesawat" element={<Pesawat/>}/>
                <Route path="/database" element={<Database/>}/>
                <Route path="/kontak" element={<Kontak/>}/>
                <Route path="/detail-kebakaran-A" element={<DetailKebakaran/>}/>
                <Route path="/detail-kebakaran-B" element={<DetailKebakaranB/>}/>
                <Route path="/detail-kebakaran-C" element={<DetailKebakaranC/>}/>
                <Route path="/detail-kebakaran-D" element={<DetailKebakaranD/>}/>
                <Route path="/detail-pesawat-A" element={<DetailPesawatA/>}/>
                <Route path="/detail-pesawat-B" element={<DetailPesawatB/>}/>
                <Route path="/detail-pesawat-C" element={<DetailPesawatC/>}/>
                <Route path="/detail-pesawat-D" element={<DetailPesawatD/>}/>
                <Route path="/detail-pesawat-E" element={<DetailPesawatE/>}/>
                <Route path="/detail-pesawat-F" element={<DetailPesawatF/>}/>
               
            </Routes>
        </div>
    );
}

export default AppRoutes