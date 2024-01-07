import ReactDOM from "react-dom/client";
import { Route, Routes } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Crousel from './Components/Crousel/Crousel';
import Wwd from './Components/WWD/Wwd';
import Aboutus from './Components/ABOUTUS/Aboutus';
import Footer from './Components/Footer/Footer';
import Servicecard from './Components/Services/Servicecard';
import Servicedetail from './Components/Servicesdetails/Servicedetail';
import Home from './Pages/Home'
import Aboutpage from './Pages/Aboutpage'
import Contactpage from './Pages/Contactpage'
import Servicepage from './Pages/Servicepage'
import Topbar from "./Components/Topbar/Topbar";

function App() {
  return (
   
    
    <div className="App">
      <Topbar/>
     <Navbar/>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={< Servicepage/>} />
        <Route path="/contact" element={<Contactpage />} />
       
      </Routes>

     <Footer/>










     {/* <Crousel/>
     <Wwd/>
     <Aboutus/>
     <Servicecard/>
     <Servicedetail/> */}



    </div>
  );
}

export default App;
