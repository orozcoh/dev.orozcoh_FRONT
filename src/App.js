import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from "./pages/Home";
import ApiTree4000 from "./pages/dataLogger/api2_4000";
import DataLogMed from "./pages/dataLogger/datalog_MED";
import ApiTree3000 from "./pages/myUrls/api2_3000";
import UrlPush from "./pages/myUrls/url_push";
import { Route, Routes} from "react-router-dom";
//import NavbarDataLogger from './navbar_datalogger';


function App() {
  return (
    <>


      <div id="page-content" className="container-fluid">
         <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/dataLogger" element={<ApiTree4000/>}/>
          <Route path="/dataLogger/Arduino_MED" element={<DataLogMed/>}/>
          {/* <Route path="/dataLogger/Arduino_PEI" element={<DataLogger_ARDU_PEI/>}/> */}

          <Route path="/myUrls" element={<ApiTree3000/>}/>
          <Route path="/myUrls/push" element={<UrlPush/>}/>
          <Route path="/myUrls/browse" element={<myUrls/>}/>
         </Routes>
         <Footer/>
      </div>
    </>
  )
}

export default App;
