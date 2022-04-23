import React, { useEffect, useState } from "react";
import { fetchData } from "../helper";

function Aboutvideo() {
  const [aboutVideoData, setAboutVideoData] = useState([]);

  useEffect(() => {
    async function images() {
      const aboutVideoDatas = await fetchData();
      const filtervideoDatas = aboutVideoDatas.filter(
        (data) => data.ID === "24610" && data
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
              <video
                loop
                muted
                autoPlay
                controls=""
                style={{ width: "100%", height: "20%" }}
              >
                <source src={img.guid} type="video/mp4"></source>
              </video>
            </div>
          );
        })}
    </div>
  );
}

export default Aboutvideo;
