import Navbar from "./sections/Navbar";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";


function App() {

  return (
    <div className='bg-gradient-to-b from-black to-[#0b0b22] from-30%'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />  
        </Routes>
      </Router>
    </div>
  )
}


export default App
