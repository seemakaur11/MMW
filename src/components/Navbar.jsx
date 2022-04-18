import React, { useEffect, useState } from "react";
import { fetchData } from "../helper";

function NavbarData() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    async function images() {
      const navData = await fetchData();
      const filterNavData = navData.filter(
        (data) => data.ID === "1034" && data
      );
      setNavData(filterNavData);
    }
    images();
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  fixed-top navbar-light "
        id="nav"
      >
        {navData &&
          navData.length > 0 &&
          navData.map((img, id) => {
            return (
              <div key={id}>
                <img src={img.guid} alt="logo-image" id="logo" />
              </div>
            );
          })}
        <div id="container justify-content-end ">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse"
            color="white"
            id="navbarCollapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/home" className="nav-link pl-4 pr-4  text-white">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link pl-4 pr-4 text-white">
                  ABOUT US
                </a>
              </li>

              <li className="nav-item">
                <a href="/clients" className="nav-link pl-4 pr-4 text-white">
                  SERVICES
                </a>
              </li>

              <li className="nav-item">
                <a href="/contact" className="nav-link pl-4 pr-4 text-white">
                  OUR PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link  pl-4 pr-4 text-white">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link pl-4 pr-5  text-white">
                  CONTACT US
                </a>
              </li>
            </ul>
            <button id="navbar-btn" type="button" className="">
              <i className="pr-2 fa-solid fa-phone"></i>1300 769 302
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarData;
