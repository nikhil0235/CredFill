// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


const App = () => {
      return (
        <>   
        <Navbar/>
          <Routes>
        <Route path="/">
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/about" element={ <About/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/contact" element={<Services />}></Route>
        </Route>
      </Routes>
      <Footer/>
      </>
      );
    };
    
export default App;
