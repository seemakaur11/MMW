import React, { useEffect, useState } from "react";
import { fetchData } from "../helper";

const Footer = () => {
  const [clientLogo, setClientLogo] = useState([]);
  const [googleLogo, setGoogleLogo] = useState([]);

  useEffect(() => {
    async function images() {
      const clientData = await fetchData();
      const filterclientData = clientData.filter(
        (data) => data.ID === "29365" && data
      );
      const filtergoogleData = clientData.filter(
        (data) => data.ID === "29366" && data
      );
      setClientLogo(filterclientData);
      setGoogleLogo(filtergoogleData);
    }
    images();
  }, []);

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {/* <div className="container-fluid pt-5 pl-5" id="footer-container">
        <div className="row pt-4 pl-3">
          <div className="col-md-3" id="footer-s1">
            <h4>Victoria</h4>
            <p>
              <i class="fa-solid fa-map-location"></i>3/17 Perpetual St,
            </p>
            <h6>TRUGANINA VIC 3029</h6>
          </div>
          <div className="col-md-3" id="footer-s2">
            <h4>New South Wales</h4>
            <p>
              <i class="fa-solid fa-map-location"></i>1/4A Bessemer St,
              Blacktown
            </p>
            <h6>NSW 2148, Australia</h6>
          </div>
          <div className="col-md-2" id="footer-s3">
            <h4>Quick Links</h4>
            <p>
              <i class="fa-solid fa-circle-check"></i>About Us
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i> FAQs
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i> Our Portfolio
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i>Services
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i>Blog
            </p>
          </div>
          <div className="col-md-4" id="footer-s4">
            <h5>
              Creating future-proof digital experiences is what we do. Tell us
              about your needs, we’d love to collaborate with you.
            </h5>
            <h4>info@makemywebsite.com.au</h4>

            <a href="https://www.facebook.com/makemywebsite.com.au">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/makemywebsite.mmw/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/make-my-website-pty-ltd/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/makemywebsite16">
              <i class="fa-brands fa-twitter-square"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCWZs6OlOLKKFKQP7Ldn7jGQ">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
          <div>
            <div id="footer-p1">
              <p>
                <i class="fa-solid fa-circle-dot"></i>Web Design Sydney
              </p>
              <p>
                <i class="fa-solid fa-circle-dot"></i>Web Design Brisbane
              </p>
              <p>
                <i class="fa-solid fa-circle-dot"></i>Web Design Perth
              </p>
            </div>

            <div id="footer-p2">
              <p>
                <i class="fa-solid fa-circle-dot"></i>Web Design Adelaide
              </p>
              <p>
                <i class="fa-solid fa-circle-dot"></i>Web Design Geelong
              </p>
            </div>

            <div id="footer-p3">
              <p>
                <i class="fa-solid fa-circle-dot"></i>Web Design Gold Coast
              </p>
              <p>
                <i class="fa-solid fa-circle-dot"></i>Web Design Newcastle
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid " id="footer-container-logo-para">
        <div className="container">
          <div id="footer-logo1">
            {clientLogo &&
              clientLogo.length > 0 &&
              clientLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="client-image" id="client" />
                  </div>
                );
              })}

            {googleLogo &&
              googleLogo.length > 0 &&
              googleLogo.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="client-image" id="google" />
                  </div>
                );
              })}
          </div>
          <div id="footer-logo-p">
            <div id="footer-logo-p1">
              <p>Terms & Conditions </p>
              <p>Privacy Policy</p>
            </div>
            <div id="footer-logo-p2">
              <p>Copyright © 2022 Make My Website. All Rights Reserved. </p>
              <p>Web Design Melbourne Make My Website</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <div className="py-3">
                  <h4 id="fotterh4">Victoria</h4>
                </div>
                <div>
                  <p>
                    <i class="fa-solid fa-map-location"></i> 3/17 Perpetual St,
                  </p>
                  <h6 id="footerh6">TRUGANINA VIC 3029</h6>
                </div>
                <div className="row py-5">
                  <div className="col-lg-12">
                    <div  id="footer">
                      <p>
                        <i class="fa-solid fa-circle-dot"></i> Web Design Sydney
                      </p>
                      <p>
                        <i class="fa-solid fa-circle-dot"></i> Web Design Brisbane
                      </p>
                      <p>
                        <i class="fa-solid fa-circle-dot"></i> Web Design Perth
                      </p>
                      <p>
                        <i class="fa-solid fa-circle-dot"></i> Web Design Newcastle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="py-3">
                  <h4 id="fotterh4">New South Wales</h4>
                </div>
                <div>
                  <p>
                    <i class="fa-solid fa-map-location"></i> 1/4A Bessemer St,
                    Blacktown
                  </p>
                  <h6 id="footerh6">NSW 2148, Australia</h6>
                </div>
                <div className="row py-5">
                  <div className="col-lg-12">

                    <div  id="footer">
                      <p>
                        <i class="fa-solid fa-circle-dot"></i> Web Design Adelaide
                      </p>
                      <p>
                        <i class="fa-solid fa-circle-dot"></i> Web Design Geelong
                      </p>
                      <p>
                        <i class="fa-solid fa-circle-dot"></i> Web Design Gold Coast
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div id="footerlinks">
                  <h4 id="fotterh4" className="py-3">Quick Links</h4>
                  <p>
                    <i class="fa-solid fa-circle-check"></i> About Us
                  </p>
                  <p>
                    <i class="fa-solid fa-circle-check"></i> FAQs
                  </p>
                  <p>
                    <i class="fa-solid fa-circle-check"></i> Our Portfolio
                  </p>
                  <p>
                    <i class="fa-solid fa-circle-check"></i> Services
                  </p>
                  <p>
                    <i class="fa-solid fa-circle-check"></i> Blog
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="py-4" id="social-links">
              <h5 className="mb-5">
                Creating future-proof digital experiences is what we do. Tell us
                about your needs, we’d love to collaborate with you.
              </h5>
              <h4 className="">info@makemywebsite.com.au</h4>

              <a  href="https://www.facebook.com/makemywebsite.com.au">
                <i className="fa-brands fa-facebook mr-5 pt-5"></i>
              </a>
              <a href="https://www.instagram.com/makemywebsite.mmw/">
                <i className="fa-brands fa-instagram mr-5 pt-5"></i>
              </a>
              <a href="https://www.linkedin.com/company/make-my-website-pty-ltd/">
                <i className="fa-brands fa-linkedin-in mr-5 pt-5"></i>
              </a>
              <a href="https://twitter.com/makemywebsite16">
                <i className="fa-brands fa-twitter-square mr-5 pt-5"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCWZs6OlOLKKFKQP7Ldn7jGQ">
                <i className="fa-brands fa-youtube mr-5 pt-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};
export default Footer;
