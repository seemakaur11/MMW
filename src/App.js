import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

import NavbarData from "./components/Navbar";
import Footer from "./components/Footer";
import Customer from "./components/Customer";
function App() {
  return (
    <div>
       {/* <NavbarData />
      <Home />
 <Footer/> */}
 <Customer/>
    </div>
  );
}

export default App;
