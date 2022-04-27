import React, { useEffect, useState } from "react";
import { fetchData, aboutData } from "../helper";

const Aboutstory = () => {
  ///images//
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
  }, [])
  ///contents////
  const [aboutContent, setAboutContent] = useState([])
  const [aboutContent1, setAboutContent1] = useState([])
  const [ourTitle, setOurTitle] = useState([])
  useEffect(() => {
    async function images() {
      const aboutcontent = await aboutData();
      const filteraboutcontent = aboutcontent.filter(
        (data) => data.meta_key === "our_tagline" && data
      );
      setAboutContent(filteraboutcontent);
      const filteraboutcontent1 = aboutcontent.filter(
        (data) => data.meta_key === "our_tagline1" && data
      );
      setAboutContent1(filteraboutcontent1);
      
      const filterourTitle = aboutcontent.filter(
        (data) => data.meta_key === "Our_title" && data
      );
      setOurTitle(filterourTitle);
    }
    images();
  }, [])

  return (
    <div>
      <div className="container-fluid pb-5">
        <h1 id="about-story">
          {ourTitle &&
            ourTitle.length > 0 &&
            ourTitle.map((head, id) => {
              return (
                <div key={id}>
                  {head.meta_value}
                </div>
              );
            })}
        </h1>
        <div className="container">
        <div className="row pb-5">
          <div className="col-lg-6 py-5">
            <p id="about-para1">
              {aboutContent &&
                aboutContent.length > 0 &&
                aboutContent.map((head, id) => {
                  return (
                    <div key={id}>
                      {head.meta_value}
                    </div>
                  );
                })}
            </p>
            <p className="pt-3" id="about-para1">
              {aboutContent1 &&
                aboutContent1.length > 0 &&
                aboutContent1.map((head, id) => {
                  return (
                    <div key={id}>
                      {head.meta_value}
                    </div>
                  );
                })}
            </p>
          </div>
          <div className="col-lg-6 py-5">
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
    </div>
  );
};

export default Aboutstory;
