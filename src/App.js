import React, { Suspense, lazy } from "react";
import "./App.css";
<<<<<<< HEAD
import React from "react";

=======
import "./About.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
>>>>>>> 4e396789b84e5b27d6765c76207377ab6935fa8f
import Home from "./components/Home";
import NavbarData from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Customer from "./components/Customer";
import About from "./components/About";
=======
>>>>>>> 4e396789b84e5b27d6765c76207377ab6935fa8f

function App() {
  return (
    <div>
<<<<<<< HEAD
    
     
      <NavbarData />
      <Home />
      <Footer />
      
=======
      <BrowserRouter>
        <NavbarData />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
>>>>>>> 4e396789b84e5b27d6765c76207377ab6935fa8f
    </div>
  );
}

export default App;
