import React, { Suspense, lazy } from "react";
import "./App.css";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavbarData from "./components/Navbar";
import About from "./components/About";

function App() {
  // const Lazy = lazy(
  //   () =>
  //     new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve({ default: () => <Home /> });
  //       }, 4000);
  //     })
  // );

  /* <Suspense fallback={<LazyLoading />}> */

  /* <Lazy /> */

  return (
    <div>
      <BrowserRouter>
        <NavbarData />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
