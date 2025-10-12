import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Tarot from "./pages/Tarot";
import Astrology from "./pages/Astrology";
import Contact from "./pages/Contact";
import React from "react"

const App: React.FC = () => {

  return (
    <div className='bg-gradient-to-b from-black to-[#0b0b22] from-30%'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/tarot" element={<Tarot />} />  
          <Route path="/astrologia" element={<Astrology />} />  
          <Route path="/contacto" element={<Contact />} />  
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}


export default App
