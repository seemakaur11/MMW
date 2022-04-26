import React, { useEffect, useState } from "react";
import { fetchData } from "../helper";

function Aboutvideo() {
  const [aboutVideoData, setAboutVideoData] = useState([]);

  useEffect(() => {
    async function images() {
      const aboutVideoDatas = await fetchData();
      const filtervideoDatas = aboutVideoDatas.filter(
        (data) => data.ID === "34528" && data
      );
      setAboutVideoData(filtervideoDatas);
    }
    images();
  }, []);

  return (
    <div>
      {aboutVideoData &&
        aboutVideoData.length > 0 &&
        aboutVideoData.map((img, id) => {
          return (
            <div key={id} id="about-video-container">
              <video loop muted autoPlay controls="" id="about-video">
                <source src={img.guid} type="video/mp4"></source>
              </video>
              <div id="video-para">
                <h1>What We Do</h1>
                <p>
                  Make My Website offers end-to-end strategic web solutions with
                  a focus on customer satisfaction. Our mission is simple- to
                  build you a website that aligns with your goals, take a
                  strategic route, and market you online. With over 400+ reviews
                  on Google, Facebook, Oneflare, and Word of Mouth, we have been
                  rated highly credible for the work we do. We infuse creativity
                  in your online space and make it a captivating experience for
                  the users on the world wide web.
                </p>
                <p>
                  Are you looking for a cutting-edge website? We are here to
                  help!
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Aboutvideo;
