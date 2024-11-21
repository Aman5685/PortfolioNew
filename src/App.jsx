import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import PortFolio from "./Components/Portfolio"
import Skills from "./Components/Skills"
import { Toaster } from "react-hot-toast"

//import React from 'react';
function App() {
  return (
    <>
    <div>
      <Navbar />
      <About />
      <PortFolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
    <Toaster />
    </>
  )
}

export default App
