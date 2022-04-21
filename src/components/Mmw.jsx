import React, { useEffect, useState } from "react";
import { fetchData } from "../helper";

const Mmw = () => {
  const [mmwData, setmmwData] = useState([]);

  const [googlePartnerLogo, setGooglePartnerLogo] = useState([]);
  const [shopifyLogo, setShopifyLogo] = useState([]);
  const [commerceLogo, setCommerceLogo] = useState([]);
  const [wordpressLogo, setWordpressLogo] = useState([]);
  const [magentoLogo, setMagentoLogo] = useState([]);

  useEffect(() => {
    async function images() {
      const mmwData = await fetchData();
      const filtermmwData = mmwData.filter(
        (data) => data.ID === "38356" && data
      );
      const filterGooglePartnerData = mmwData.filter(
        (data) => data.ID === "34535" && data
      );
      const filterShopifyData = mmwData.filter(
        (data) => data.ID === "34537" && data
      );
      const filterCommerceData = mmwData.filter(
        (data) => data.ID === "34538" && data
      );
      const filterWordpressData = mmwData.filter(
        (data) => data.ID === "34539" && data
      );
      const filterMagentoData = mmwData.filter(
        (data) => data.ID === "34536" && data
      );

      setmmwData(filtermmwData);

      setGooglePartnerLogo(filterGooglePartnerData);
      setShopifyLogo(filterShopifyData);
      setCommerceLogo(filterCommerceData);
      setWordpressLogo(filterWordpressData);
      setMagentoLogo(filterMagentoData);
    }
    images();
  }, []);

  return (
    <div>
      {mmwData &&
        mmwData.length > 0 &&
        mmwData.map((img, id) => {
          return (
            <div
              key={id}
              id="mmw-img-div"
              style={{
                backgroundImage: "url(" + img.guid + ")",
                height: "980px",
                width: "100%",
              }}
            >
              <div className="mmw-content-main-div my-5 py-4"> .</div>
              <div
                className="col-md-6 pl-5 pt-5 ml-5 mb-5"
                id="mmw-content-div"
              >
                <h1>Have A Project In Mind?</h1>
                <h6>
                  Want to collaborate and give wings to your dream project?
                </h6>
                <h6>Let’s talk!</h6>
                <button type="button" id="mmw-btn">
                  GET A QUOTE
                </button>

                <div id="main-elemontor">
                  <div id="rcircle">
                    <div id="welcome-shape-1"></div>
                    <div id="welcome-shape-2"></div>
                  </div>
                </div>
              </div>

              <div
                className="container-fluid pt-5 pb-5"
                id="mmw-logo-container"
              >
                <h1>We team up with the leading names of the industry</h1>
                <h6>
                  We have established a close channel with major technology
                  brands across the world and it enables us to bring the best to
                  <br></br> every business, every time.
                </h6>
                <div className="row">
                  <div className="col-md-2">
                    {googlePartnerLogo &&
                      googlePartnerLogo.length > 0 &&
                      googlePartnerLogo.map((img, id) => {
                        return (
                          <div key={id}>
                            <img src={img.guid} alt="logo" id="mmw-logos" />
                          </div>
                        );
                      })}
                  </div>

                  <div className="col-md-2">
                    {shopifyLogo &&
                      shopifyLogo.length > 0 &&
                      shopifyLogo.map((img, id) => {
                        return (
                          <div key={id}>
                            <img src={img.guid} alt="logo" id="mmw-logos" />
                          </div>
                        );
                      })}
                  </div>

                  <div className="col-md-2">
                    {commerceLogo &&
                      commerceLogo.length > 0 &&
                      commerceLogo.map((img, id) => {
                        return (
                          <div key={id}>
                            <img src={img.guid} alt="logo" id="mmw-logos" />
                          </div>
                        );
                      })}
                  </div>

                  <div className="col-md-2">
                    {wordpressLogo &&
                      wordpressLogo.length > 0 &&
                      wordpressLogo.map((img, id) => {
                        return (
                          <div key={id}>
                            <img src={img.guid} alt="logo" id="mmw-logos" />
                          </div>
                        );
                      })}
                  </div>

                  <div className="col-md-2">
                    {magentoLogo &&
                      magentoLogo.length > 0 &&
                      magentoLogo.map((img, id) => {
                        return (
                          <div key={id}>
                            <img src={img.guid} alt="logo" id="mmw-logos" />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Mmw;
