import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/footer";
import NavbarData from "./components/Navbar";

function App() {
  return (
    <div>
      <NavbarData />
      <Home />
    <Footer />
    </div>
  );
}

export default App;
