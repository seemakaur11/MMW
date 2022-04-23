import React, { useEffect, useState } from "react";
import { fetchData } from "../helper";

const Aboutstory = () => {
  const [aboutImage, setAboutData] = useState([]);
  useEffect(() => {
    async function images() {
      const aboutDatas = await fetchData();
      const filteraboutData = aboutDatas.filter(
        (data) => data.ID === "40228" && data
      );
      setAboutData(filteraboutData);
    }
    images();
  }, []);
  return (
    <div>
      <div className="container-fluid pb-5">
        <h1 id="about-story">Our Story</h1>
        <div className="row pb-5">
          <div className="col-md-6">
            <p id="about-para1">
              What first started as an idea has now transformed into a vision
              and as we continue to expand our horizons- our commitment towards
              providing high standards of service has just gotten stronger. As a
              digital agency with clients in every single state and territory of
              Australia, our establishment as a renowned company has been
              worthwhile.
            </p>
            <p id="about-para2">
              Our dynamic team has delivered 600+ websites, created ingenious
              strategies and helped numerous businesses in this digital space.
              We are ready to take up any challenge and strive to provide the
              best customer service.
            </p>
          </div>
          <div className="col-md-6 py-5">
            {aboutImage &&
              aboutImage.length > 0 &&
              aboutImage.map((img, id) => {
                return (
                  <div key={id}>
                    <img src={img.guid} alt="logo" id="about-mystory" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutstory;
