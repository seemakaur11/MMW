import React, { Suspense, lazy } from "react";
import "./App.css";
import "./About.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavbarData from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarData />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
