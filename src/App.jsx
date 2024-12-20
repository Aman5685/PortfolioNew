import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import PortFolio from "./Components/Portfolio"
import Skills from "./Components/Skills"
import { Toaster } from "react-hot-toast"

//import React from 'react';
function App() {
  //code for inspect secure
  document.addEventListener("contextmenu",function(e){
    e.preventDefault();
 });
 
 document.onkeydown=function(e){
       if(event.keyCode==123)
       {
         return false;
       }
       if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0))
       {
             return false;
       }
       if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0))
       {
          return false;
       }
       if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0))
       {
             return false;
       }
       if(e.ctrlKey && e.keyCode=="U".charCodeAt(0))
       { 
         return false;
       }
}
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
