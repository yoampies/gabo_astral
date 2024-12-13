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


function App() {

  return (
    <div className='bg-gradient-to-b from-black to-[#0b0b22] from-30%'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />  
          <Route exact path="/tarot" element={<Tarot />} />  
          <Route exact path="/astrologia" element={<Astrology />} />  
          <Route exact path="/contacto" element={<Contact />} />  
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}


export default App
